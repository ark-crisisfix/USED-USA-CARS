import type { LeadFormType, LeadPayload } from "@/lib/types/commerce";

const BUDGET_VALUES = ["under_10k", "10k_15k", "15k_25k", "25k_40k", "40k_plus"] as const;
const DEST_VALUES = ["Canada", "Ukraine", "UAE", "Other"] as const;
const FORM_TYPES: LeadFormType[] = [
  "general",
  "ready_car",
  "similar_car",
  "shipping",
  "calculator",
  "case_similar",
];

export type ValidatedLead = Omit<
  LeadPayload,
  "timestamp" | "user_agent" | "referrer" | "website"
> & {
  website?: string;
};

export function validateLeadBody(body: Record<string, unknown>): { ok: true; data: ValidatedLead } | { ok: false; errors: string[] } {
  const errors: string[] = [];

  const name = String(body.name ?? "").trim();
  const contact = String(body.contact ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const destination = String(body.destination ?? "").trim();
  const preferred_vehicle = body.preferred_vehicle != null ? String(body.preferred_vehicle).trim() : "";
  const condition_preference = body.condition_preference != null ? String(body.condition_preference).trim() : "";
  const message = body.message != null ? String(body.message).trim() : "";
  const source_page = String(body.source_page ?? "").trim() || "/";
  const form_type = String(body.form_type ?? "general").trim() as LeadFormType;
  const source_context = body.source_context != null ? String(body.source_context).trim() : "";
  const car_reference_id = body.car_reference_id != null ? String(body.car_reference_id).trim() : "";
  const ready_car_reference_id = body.ready_car_reference_id != null ? String(body.ready_car_reference_id).trim() : "";
  const case_reference_id = body.case_reference_id != null ? String(body.case_reference_id).trim() : "";
  const website = body.website != null ? String(body.website).trim() : "";

  if (!name) errors.push("Name is required");
  if (!contact) errors.push("Contact is required");
  if (!budget || !BUDGET_VALUES.includes(budget as (typeof BUDGET_VALUES)[number])) {
    errors.push("Budget is required");
  }
  if (!destination || !DEST_VALUES.includes(destination as (typeof DEST_VALUES)[number])) {
    errors.push("Destination is required");
  }
  if (!FORM_TYPES.includes(form_type)) errors.push("Invalid form type");

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      contact,
      budget,
      destination,
      preferred_vehicle: preferred_vehicle || undefined,
      condition_preference: condition_preference || undefined,
      message: message || undefined,
      source_page,
      form_type,
      source_context: source_context || undefined,
      car_reference_id: car_reference_id || undefined,
      ready_car_reference_id: ready_car_reference_id || undefined,
      case_reference_id: case_reference_id || undefined,
      website: website || undefined,
    },
  };
}

export { BUDGET_VALUES, DEST_VALUES };
