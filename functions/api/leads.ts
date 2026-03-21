/**
 * Cloudflare Pages Function — POST /api/leads
 * Configure secrets in Pages → Settings → Environment variables:
 * SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (optional)
 * RESEND_API_KEY, LEADS_NOTIFY_EMAIL, RESEND_FROM_EMAIL (optional)
 * HUBSPOT_PRIVATE_APP_TOKEN (optional)
 */
import { handleLeadPost, type LeadHandlerEnv } from "../../lib/leads/handleLeadPost";

export async function onRequestPost(context: { request: Request; env: LeadHandlerEnv & Record<string, unknown> }) {
  return handleLeadPost(context.request, context.env as LeadHandlerEnv);
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
