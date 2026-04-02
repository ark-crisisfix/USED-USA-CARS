import { SITE_BRAND, SITE_URL } from "@/lib/siteMeta";
import type { LeadRecord } from "@/lib/leads/types";

type NotificationEnv = {
  RESEND_API_KEY?: string;
  NOTIFY_EMAIL_TO?: string;
  NOTIFY_EMAIL_FROM?: string;
};

type SendLeadNotificationEmailArgs = {
  lead: LeadRecord;
  submittedAt: string;
  requestUrl: string;
  requestHostname?: string | null;
  explicitSiteName?: string | null;
};

export type SendLeadNotificationResult = {
  success: boolean;
  error?: string;
  skipped?: boolean;
};

type ResolvedSiteDetails = {
  siteName: string;
  siteDomain: string;
  pageUrl: string;
  contextLabel: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asDisplayValue(value: string | null | undefined, fallback = "-"): string {
  const normalized = value?.trim();
  return normalized ? normalized : fallback;
}

function shorten(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function toAbsoluteUrl(value: string | null | undefined, requestUrl: string): string | null {
  const normalized = value?.trim();

  if (!normalized) return null;

  try {
    return new URL(normalized, requestUrl).toString();
  } catch {
    return null;
  }
}

function parseHostname(value: string | null | undefined): string | null {
  const normalized = value?.trim();
  if (!normalized) return null;

  try {
    return new URL(normalized.includes("://") ? normalized : `https://${normalized}`).hostname || null;
  } catch {
    return null;
  }
}

function humanizeCondition(value: string | null): string | null {
  if (!value) return null;

  const map: Record<string, string> = {
    clean: "clean-title vehicle",
    salvage: "salvage vehicle",
    any: "any condition",
  };

  return map[value] ?? value;
}

function determineContextLabel(lead: LeadRecord): string {
  const context = lead.source_context ?? "";

  if (lead.form_type === "ready_car" || context.startsWith("ready_car")) return "ready_car";
  if (lead.form_type === "case_similar" || context.startsWith("case:")) return "case";
  if (context.includes("homepage")) return "homepage";
  if (context.includes("calculator")) return "calculator";
  if (context.includes("export")) return "export";
  if (context.includes("catalog") || lead.form_type === "similar_car") return "car_detail";
  if (context.includes("shipping") || lead.form_type === "shipping") return "shipping";
  return lead.form_type;
}

function buildSummary(lead: LeadRecord, contextLabel: string): string {
  const parts: string[] = [];
  const condition = humanizeCondition(lead.condition_preference);
  const destination = lead.destination.trim();
  const budget = lead.budget.trim();

  if (contextLabel === "ready_car") {
    parts.push("Lead came from Ready Car page");
  } else if (contextLabel === "case") {
    parts.push("Lead came from Case page");
  } else if (contextLabel === "calculator") {
    parts.push("Lead came from Calculator");
  } else if (contextLabel === "export") {
    parts.push("Lead came from Export page");
  } else if (contextLabel === "homepage") {
    parts.push("Lead came from Homepage");
  } else {
    parts.push("Buyer inquiry received");
  }

  if (condition && destination) {
    parts.push(`interested in a ${condition} for ${destination}`);
  } else if (destination) {
    parts.push(`destination ${destination}`);
  } else if (condition) {
    parts.push(`condition preference ${condition}`);
  }

  if (budget) {
    parts.push(`budget ${budget}`);
  }

  if (lead.preferred_vehicle) {
    parts.push(`requested ${lead.preferred_vehicle}`);
  }

  if (lead.lot_reference) {
    parts.push(`referenced lot ${lead.lot_reference}`);
  }

  const sentence = parts.join(", ");
  const message = lead.message ? ` Message: ${shorten(lead.message, 160)}` : "";
  return `${sentence}.${message}`.replace(",.", ".");
}

function formatSubmittedAt(submittedAt: string): string {
  const date = new Date(submittedAt);

  if (Number.isNaN(date.getTime())) {
    return submittedAt;
  }

  return date.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC");
}

function resolveSiteDetails(args: SendLeadNotificationEmailArgs): ResolvedSiteDetails {
  const absolutePageUrl = toAbsoluteUrl(args.lead.page_url, args.requestUrl);
  const pageHostname = parseHostname(absolutePageUrl);
  const requestHostname = args.requestHostname?.trim() || parseHostname(args.requestUrl);
  const configuredHostname = parseHostname(args.lead.site_source) || parseHostname(SITE_URL);
  const siteDomain = pageHostname || requestHostname || configuredHostname || "Unknown site";
  const shouldUseExplicitName = !pageHostname || !configuredHostname || pageHostname === configuredHostname;
  const explicitName = shouldUseExplicitName ? args.explicitSiteName?.trim() : null;
  const siteName = explicitName || pageHostname || requestHostname || SITE_BRAND || "Unknown site";

  return {
    siteName,
    siteDomain,
    pageUrl: absolutePageUrl ?? args.lead.page_url ?? "-",
    contextLabel: determineContextLabel(args.lead),
  };
}

function buildSubject(siteName: string, lead: LeadRecord): string {
  return `New Lead from ${siteName} - ${lead.destination || "Unknown destination"} - ${
    lead.budget || "No budget selected"
  }`;
}

function buildDetailRows(rows: Array<[string, string | null | undefined]>): string {
  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#0f172a;vertical-align:top;white-space:nowrap;">${escapeHtml(
          label
        )}</td><td style="padding:8px 0;color:#334155;">${escapeHtml(asDisplayValue(value))}</td></tr>`
    )
    .join("");
}

function buildHtml(args: SendLeadNotificationEmailArgs, resolved: ResolvedSiteDetails): string {
  const submittedAt = formatSubmittedAt(args.submittedAt);
  const summary = buildSummary(args.lead, resolved.contextLabel);
  const messageBlock = args.lead.message
    ? `<div style="margin-top:24px;">
        <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Message</h2>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;color:#334155;white-space:pre-wrap;">${escapeHtml(
          args.lead.message
        )}</div>
      </div>`
    : `<div style="margin-top:24px;">
        <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Message</h2>
        <div style="color:#64748b;">-</div>
      </div>`;

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f1f5f9;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
      <div style="padding:24px 28px;background:#0f172a;color:#ffffff;">
        <div style="font-size:24px;font-weight:700;">New Lead Received</div>
        <div style="margin-top:8px;font-size:14px;color:#cbd5e1;">Site: ${escapeHtml(
          resolved.siteName
        )} (${escapeHtml(resolved.siteDomain)})</div>
        <div style="margin-top:4px;font-size:14px;color:#cbd5e1;">Submission time: ${escapeHtml(submittedAt)}</div>
      </div>
      <div style="padding:24px 28px;">
        <div style="margin-bottom:24px;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Site Information</h2>
          <table style="width:100%;border-collapse:collapse;">${buildDetailRows([
            ["Site", resolved.siteName],
            ["Site domain", resolved.siteDomain],
            ["Page URL", resolved.pageUrl],
            ["Context", resolved.contextLabel],
            ["Source context", args.lead.source_context],
            ["Form type", args.lead.form_type],
            ["Submitted", submittedAt],
          ])}</table>
        </div>

        <div style="margin-bottom:24px;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Lead Summary</h2>
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px;color:#1e3a8a;">${escapeHtml(
            summary
          )}</div>
        </div>

        <div style="margin-bottom:24px;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Lead Details</h2>
          <table style="width:100%;border-collapse:collapse;">${buildDetailRows([
            ["Name", args.lead.name],
            ["Contact", args.lead.contact],
            ["Budget", args.lead.budget],
            ["Destination", args.lead.destination],
            ["Preferred vehicle", args.lead.preferred_vehicle],
            ["Condition", args.lead.condition_preference],
            ["Lot reference", args.lead.lot_reference],
          ])}</table>
        </div>

        ${messageBlock}

        <div style="margin-top:24px;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Reference Details</h2>
          <table style="width:100%;border-collapse:collapse;">${buildDetailRows([
            ["Ready Car ID", args.lead.ready_car_reference_id],
            ["Car ID", args.lead.car_reference_id],
            ["Case ID", args.lead.case_reference_id],
          ])}</table>
        </div>

        <div style="margin-top:24px;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#0f172a;">Technical Details</h2>
          <table style="width:100%;border-collapse:collapse;">${buildDetailRows([
            ["Referrer", args.lead.referrer],
            ["Page URL", resolved.pageUrl],
            ["User agent", args.lead.user_agent],
            ["Submission timestamp", submittedAt],
          ])}</table>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function buildText(args: SendLeadNotificationEmailArgs, resolved: ResolvedSiteDetails): string {
  const submittedAt = formatSubmittedAt(args.submittedAt);
  const summary = buildSummary(args.lead, resolved.contextLabel);

  return [
    "New Lead Received",
    "",
    "Site Information",
    `Site: ${resolved.siteName}`,
    `Site domain: ${resolved.siteDomain}`,
    `Page URL: ${resolved.pageUrl}`,
    `Context: ${resolved.contextLabel}`,
    `Source context: ${asDisplayValue(args.lead.source_context)}`,
    `Form type: ${args.lead.form_type}`,
    `Submitted: ${submittedAt}`,
    "",
    "Lead Summary",
    summary,
    "",
    "Lead Details",
    `Name: ${args.lead.name}`,
    `Contact: ${args.lead.contact}`,
    `Budget: ${args.lead.budget}`,
    `Destination: ${args.lead.destination}`,
    `Preferred vehicle: ${asDisplayValue(args.lead.preferred_vehicle)}`,
    `Condition: ${asDisplayValue(args.lead.condition_preference)}`,
    `Lot reference: ${asDisplayValue(args.lead.lot_reference)}`,
    "",
    "Message",
    asDisplayValue(args.lead.message),
    "",
    "Reference Details",
    `Ready Car ID: ${asDisplayValue(args.lead.ready_car_reference_id)}`,
    `Car ID: ${asDisplayValue(args.lead.car_reference_id)}`,
    `Case ID: ${asDisplayValue(args.lead.case_reference_id)}`,
    "",
    "Technical Details",
    `Referrer: ${asDisplayValue(args.lead.referrer)}`,
    `Page URL: ${resolved.pageUrl}`,
    `User agent: ${asDisplayValue(args.lead.user_agent)}`,
    `Submission timestamp: ${submittedAt}`,
  ].join("\n");
}

export async function sendLeadNotificationEmail(
  env: NotificationEnv,
  args: SendLeadNotificationEmailArgs
): Promise<SendLeadNotificationResult> {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL_TO || !env.NOTIFY_EMAIL_FROM) {
    return {
      success: false,
      skipped: true,
      error: "Lead notification email is not configured",
    };
  }

  const resolved = resolveSiteDetails(args);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.NOTIFY_EMAIL_FROM,
      to: [env.NOTIFY_EMAIL_TO],
      subject: buildSubject(resolved.siteName, args.lead),
      html: buildHtml(args, resolved),
      text: buildText(args, resolved),
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    return {
      success: false,
      error: shorten(text || `Resend request failed with status ${response.status}`, 240),
    };
  }

  return { success: true };
}
