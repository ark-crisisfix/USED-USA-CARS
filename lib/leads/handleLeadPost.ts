import { syncLeadToHubSpot } from "@/lib/leads/hubspot";
import { SITE_URL } from "@/lib/siteMeta";
import type {
  LeadFailureResponse,
  LeadRecord,
  LeadRequestContext,
  LeadRequestPayload,
  LeadResponse,
  LeadSuccessResponse,
} from "@/lib/leads/types";

type HandlerEnv = {
  HUBSPOT_ACCESS_TOKEN?: string;
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL_TO?: string;
  NOTIFY_EMAIL_FROM?: string;
};

function badRequest(message: string, error_code: LeadFailureResponse["error_code"]): LeadFailureResponse {
  return { ok: false, persisted: false, error_code, message };
}

function isFailureResponse(value: LeadRecord | LeadFailureResponse): value is LeadFailureResponse {
  return "ok" in value && value.ok === false;
}

function okResponse(email_sent: boolean): LeadSuccessResponse {
  return { ok: true, persisted: true, hubspot_synced: true, email_sent };
}

function toSingleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function asOptionalString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = toSingleLine(value);
  return normalized.length ? normalized : null;
}

function asRequiredString(value: unknown): string | null {
  return asOptionalString(value);
}

function normalizeFormType(value: unknown): LeadRecord["form_type"] {
  const allowed = new Set([
    "general",
    "ready_car",
    "similar_car",
    "shipping",
    "calculator",
    "case_similar",
  ]);

  if (typeof value === "string" && allowed.has(value)) {
    return value as LeadRecord["form_type"];
  }

  return "general";
}

function getClientIp(request: Request): string | null {
  const headers = request.headers;
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    null
  );
}

async function hashIp(ip: string | null): Promise<string | null> {
  if (!ip) return null;

  const bytes = new TextEncoder().encode(ip);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map((value) => value.toString(16).padStart(2, "0")).join("");
}

async function buildContext(request: Request): Promise<LeadRequestContext> {
  return {
    referrer: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent"),
    ip_hash: await hashIp(getClientIp(request)),
  };
}

function normalizeLead(payload: LeadRequestPayload, context: LeadRequestContext): LeadRecord | LeadFailureResponse {
  const name = asRequiredString(payload.name);
  const contact = asRequiredString(payload.contact);
  const budget = asRequiredString(payload.budget);
  const destination = asRequiredString(payload.destination);

  if (asOptionalString(payload.honeypot)) {
    return badRequest("Spam protection triggered.", "SPAM");
  }

  if (!name || !contact || !budget || !destination) {
    return badRequest("Please fill in all required fields.", "VALIDATION_ERROR");
  }

  if (name.length < 2 || contact.length < 3 || budget.length < 1 || destination.length < 2) {
    return badRequest("Some required fields look incomplete.", "VALIDATION_ERROR");
  }

  return {
    name,
    contact,
    budget,
    destination,
    site_source: SITE_URL.replace(/^https?:\/\//, ""),
    preferred_vehicle: asOptionalString(payload.preferred_vehicle),
    condition_preference: asOptionalString(payload.condition_preference),
    message: asOptionalString(payload.message),
    source_context: asOptionalString(payload.source_context),
    page_url: asOptionalString(payload.page_url),
    form_type: normalizeFormType(payload.form_type),
    ready_car_reference_id: asOptionalString(payload.ready_car_reference_id),
    case_reference_id: asOptionalString(payload.case_reference_id),
    car_reference_id: asOptionalString(payload.car_reference_id),
    referrer: context.referrer,
    user_agent: context.user_agent,
    ip_hash: context.ip_hash,
  };
}

async function sendNotificationEmail(env: HandlerEnv, lead: LeadRecord): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL_TO || !env.NOTIFY_EMAIL_FROM) {
    return false;
  }

  const text = [
    `New website lead`,
    ``,
    `Name: ${lead.name}`,
    `Contact: ${lead.contact}`,
    `Budget: ${lead.budget}`,
    `Destination: ${lead.destination}`,
    `Preferred vehicle: ${lead.preferred_vehicle ?? "-"}`,
    `Condition preference: ${lead.condition_preference ?? "-"}`,
    `Message: ${lead.message ?? "-"}`,
    ``,
    `Form type: ${lead.form_type}`,
    `Source context: ${lead.source_context ?? "-"}`,
    `Page URL: ${lead.page_url ?? "-"}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.NOTIFY_EMAIL_FROM,
      to: [env.NOTIFY_EMAIL_TO],
      subject: `New lead: ${lead.name}`,
      text,
    }),
  });

  return response.ok;
}

function json(data: LeadResponse, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function handleLeadPost(request: Request, env: HandlerEnv): Promise<Response> {
  const context = await buildContext(request);

  if (!env.HUBSPOT_ACCESS_TOKEN) {
    console.error("[leads] missing HUBSPOT_ACCESS_TOKEN");
    return json(badRequest("Lead storage is not configured on the server.", "CONFIG_ERROR"), 500);
  }

  let payload: LeadRequestPayload;

  try {
    payload = (await request.json()) as LeadRequestPayload;
  } catch {
    return json(badRequest("Invalid request payload.", "VALIDATION_ERROR"), 400);
  }

  const normalized = normalizeLead(payload, context);

  if (isFailureResponse(normalized)) {
    const status = normalized.error_code === "SPAM" ? 400 : 422;
    return json(normalized, status);
  }

  console.info("[leads] valid submission", {
    form_type: normalized.form_type,
    source_context: normalized.source_context,
    page_url: normalized.page_url,
    has_ip_hash: Boolean(normalized.ip_hash),
  });

  const hubspot = await syncLeadToHubSpot(env, normalized);

  if (!hubspot.success) {
    console.error("[leads] hubspot persistence failed", {
      form_type: normalized.form_type,
      source_context: normalized.source_context,
      error: hubspot.error,
    });
    return json(
      badRequest("We could not save your request right now. Please try again in a moment.", "PERSISTENCE_ERROR"),
      502
    );
  }

  console.info("[leads] hubspot persistence succeeded", {
    form_type: normalized.form_type,
    source_context: normalized.source_context,
    contact_id: hubspot.contactId,
    note_id: hubspot.noteId,
    custom_properties_applied: hubspot.customPropertiesApplied,
    custom_properties_skipped: hubspot.customPropertiesSkipped,
  });

  let emailSent = false;

  try {
    emailSent = await sendNotificationEmail(env, normalized);
    console.info("[leads] email notification", { sent: emailSent });
  } catch (error) {
    console.error("[leads] email notification failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }

  return json(okResponse(emailSent), 200);
}
