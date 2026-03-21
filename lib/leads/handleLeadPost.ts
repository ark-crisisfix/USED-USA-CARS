import { validateLeadBody, type ValidatedLead } from "@/lib/leads/leadValidate";

export interface LeadHandlerEnv {
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  LEADS_NOTIFY_EMAIL?: string;
  HUBSPOT_PRIVATE_APP_TOKEN?: string;
}

function clientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

async function sha256Hex(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

const BUDGET_LABEL: Record<string, string> = {
  under_10k: "Under $10,000",
  "10k_15k": "$10,000–$15,000",
  "15k_25k": "$15,000–$25,000",
  "25k_40k": "$25,000–$40,000",
  "40k_plus": "$40,000+",
};

function buildEmailSubject(data: ValidatedLead): string {
  const dest = data.destination;
  const bud = BUDGET_LABEL[data.budget] ?? data.budget;
  const ctx = data.form_type.replace(/_/g, " ");
  return `New Lead: ${ctx} / ${dest} / ${bud}`;
}

function buildEmailHtml(data: ValidatedLead, meta: { ipHash: string; ua: string; ref: string; ts: string }): string {
  const rows = Object.entries({
    Name: data.name,
    Contact: data.contact,
    Budget: BUDGET_LABEL[data.budget] ?? data.budget,
    Destination: data.destination,
    "Preferred vehicle": data.preferred_vehicle,
    "Condition preference": data.condition_preference,
    Message: data.message,
    "Form type": data.form_type,
    "Source page": data.source_page,
    Context: data.source_context,
    "Car ref": data.car_reference_id,
    "Ready car ref": data.ready_car_reference_id,
    "Case ref": data.case_reference_id,
    "IP hash": meta.ipHash,
    "User agent": meta.ua,
    Referrer: meta.ref,
    Timestamp: meta.ts,
  })
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${String(v).replace(/</g, "&lt;")}</td></tr>`)
    .join("");
  return `<table style="font-family:sans-serif;border-collapse:collapse">${rows}</table>`;
}

async function insertSupabase(
  env: LeadHandlerEnv,
  row: Record<string, unknown>
): Promise<{ ok: boolean; error?: string }> {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) return { ok: true };
  const res = await fetch(`${env.SUPABASE_URL.replace(/\/$/, "")}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const t = await res.text();
    return { ok: false, error: t || res.statusText };
  }
  return { ok: true };
}

async function sendResend(env: LeadHandlerEnv, subject: string, html: string): Promise<{ ok: boolean; error?: string }> {
  if (!env.RESEND_API_KEY || !env.LEADS_NOTIFY_EMAIL) return { ok: true };
  const from = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [env.LEADS_NOTIFY_EMAIL],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    return { ok: false, error: t || res.statusText };
  }
  return { ok: true };
}

async function syncHubspot(env: LeadHandlerEnv, data: { email: string; name: string; phone: string; company: string }): Promise<{ ok: boolean }> {
  if (!env.HUBSPOT_PRIVATE_APP_TOKEN) return { ok: true };
  try {
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.HUBSPOT_PRIVATE_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          email: data.email,
          firstname: data.name.split(" ")[0] ?? data.name,
          lastname: data.name.split(" ").slice(1).join(" ") || "Lead",
          phone: data.phone || undefined,
          company: data.company.slice(0, 250),
        },
      }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}

export async function handleLeadPost(request: Request, env: LeadHandlerEnv): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: jsonHeaders() });
  }

  let json: Record<string, unknown>;
  try {
    json = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: jsonHeaders() });
  }

  const hp = String(json.website ?? "").trim();
  if (hp.length > 0) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders() });
  }

  const parsed = validateLeadBody(json);
  if (!parsed.ok) {
    return new Response(JSON.stringify({ error: "Validation failed", details: parsed.errors }), {
      status: 400,
      headers: jsonHeaders(),
    });
  }

  const data = parsed.data;
  const ts = new Date().toISOString();
  const ua = request.headers.get("user-agent") ?? "";
  const ref = request.headers.get("referer") ?? "";
  const ip = clientIp(request);
  const ipHash = ip === "unknown" ? "unknown" : await sha256Hex(ip);

  const dbRow = {
    created_at: ts,
    name: data.name,
    contact: data.contact,
    budget: data.budget,
    destination: data.destination,
    preferred_vehicle: data.preferred_vehicle ?? null,
    condition_preference: data.condition_preference ?? null,
    message: data.message ?? null,
    page_type: data.form_type,
    page_url: data.source_page,
    source_context: data.source_context ?? null,
    car_reference_id: data.car_reference_id ?? null,
    ready_car_reference_id: data.ready_car_reference_id ?? null,
    case_reference_id: data.case_reference_id ?? null,
    ip_hash: ipHash,
    user_agent: ua,
    referrer: ref,
    status: "new",
    hubspot_sync_status: "pending",
  };

  const supa = await insertSupabase(env, dbRow);
  if (!supa.ok) {
    return new Response(JSON.stringify({ error: "Storage failed", detail: supa.error }), {
      status: 502,
      headers: jsonHeaders(),
    });
  }

  const subject = buildEmailSubject(data);
  const html = buildEmailHtml(data, { ipHash, ua, ref, ts });
  const mail = await sendResend(env, subject, html);

  const looksEmail = data.contact.includes("@");
  const hubEmail = looksEmail ? data.contact : `lead+${Date.now()}@inquiry.northamcars.local`;
  const hubPhone = looksEmail ? "" : data.contact;
  const hubCompany = `${subject} | ${data.source_page}`.slice(0, 250);
  const hs = await syncHubspot(env, { email: hubEmail, name: data.name, phone: hubPhone, company: hubCompany });

  return new Response(
    JSON.stringify({
      success: true,
      emailSent: mail.ok,
      emailError: mail.ok ? undefined : mail.error,
      hubspotSynced: hs.ok,
    }),
    { status: 200, headers: jsonHeaders() }
  );
}

function jsonHeaders(): HeadersInit {
  return { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
}
