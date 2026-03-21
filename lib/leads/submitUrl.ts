/** POST target for leads. On Cloudflare Pages, /api/leads is served by functions/api/leads.ts */
export function getLeadSubmitUrl(): string {
  const u = process.env.NEXT_PUBLIC_LEAD_SUBMIT_URL;
  if (u && u.length > 0) return u;
  return "/api/leads";
}
