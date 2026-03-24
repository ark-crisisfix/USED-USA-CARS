import type { LeadRecord } from "@/lib/leads/types";

const HUBSPOT_BASE_URL = "https://api.hubapi.com";

type HubSpotEnv = {
  HUBSPOT_ACCESS_TOKEN?: string;
};

export type HubSpotSyncResult = {
  success: boolean;
  contactId?: string;
  noteId?: string;
  customPropertiesApplied: boolean;
  customPropertiesSkipped: string[];
  error?: string;
};

type HubSpotRequestResult<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unknown error";
}

async function hubspotRequest<T>(
  token: string,
  path: string,
  init: RequestInit
): Promise<HubSpotRequestResult<T>> {
  const response = await fetch(`${HUBSPOT_BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const text = await response.text();
  const data = text ? (JSON.parse(text) as T & { message?: string; category?: string }) : undefined;

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error:
        (data && typeof data === "object" && "message" in data && data.message) ||
        `HubSpot request failed with ${response.status}`,
    };
  }

  return { ok: true, status: response.status, data };
}

async function findContactByEmail(token: string, email: string): Promise<string | null> {
  const result = await hubspotRequest<{ results?: Array<{ id: string }> }>(
    token,
    "/crm/v3/objects/contacts/search",
    {
      method: "POST",
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [{ propertyName: "email", operator: "EQ", value: email }],
          },
        ],
        properties: ["email"],
        limit: 1,
      }),
    }
  );

  if (!result.ok) return null;
  return result.data?.results?.[0]?.id ?? null;
}

function buildStandardProperties(lead: LeadRecord): Record<string, string> {
  const properties: Record<string, string> = {
    firstname: lead.name,
  };

  if (isEmail(lead.contact)) {
    properties.email = lead.contact;
  } else {
    properties.phone = lead.contact;
  }

  return properties;
}

function buildCustomProperties(lead: LeadRecord): Record<string, string> {
  const candidatePairs = {
    site_source: lead.site_source,
    budget_range: lead.budget,
    destination: lead.destination,
    preferred_vehicle: lead.preferred_vehicle,
    lot_reference: lead.lot_reference,
    condition_preference: lead.condition_preference,
    source_context: lead.source_context,
    page_url: lead.page_url,
    ready_car_reference_id: lead.ready_car_reference_id,
    case_reference_id: lead.case_reference_id,
    car_reference_id: lead.car_reference_id,
    form_type: lead.form_type,
  } satisfies Record<string, string | null>;

  const properties: Record<string, string> = {};

  for (const [key, value] of Object.entries(candidatePairs)) {
    if (value) properties[key] = value;
  }

  return properties;
}

async function createOrUpdateContact(
  token: string,
  properties: Record<string, string>
): Promise<HubSpotRequestResult<{ id: string }>> {
  const email = properties.email;

  if (email) {
    const existingId = await findContactByEmail(token, email);

    if (existingId) {
      return hubspotRequest<{ id: string }>(token, `/crm/v3/objects/contacts/${existingId}`, {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      });
    }
  }

  return hubspotRequest<{ id: string }>(token, "/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });
}

function buildLeadNoteBody(lead: LeadRecord): string {
  const lines = [
    "New website lead",
    "",
    `Name: ${lead.name}`,
    `Contact: ${lead.contact}`,
    `Budget: ${lead.budget}`,
    `Destination: ${lead.destination}`,
    `Preferred vehicle: ${lead.preferred_vehicle ?? "-"}`,
    `Lot URL / number: ${lead.lot_reference ?? "-"}`,
    `Condition preference: ${lead.condition_preference ?? "-"}`,
    `Message: ${lead.message ?? "-"}`,
    "",
    `Site source: ${lead.site_source}`,
    `Form type: ${lead.form_type}`,
    `Source context: ${lead.source_context ?? "-"}`,
    `Page URL: ${lead.page_url ?? "-"}`,
    `Ready car reference ID: ${lead.ready_car_reference_id ?? "-"}`,
    `Case reference ID: ${lead.case_reference_id ?? "-"}`,
    `Car reference ID: ${lead.car_reference_id ?? "-"}`,
    `Referrer: ${lead.referrer ?? "-"}`,
    `User agent: ${lead.user_agent ?? "-"}`,
    `IP hash: ${lead.ip_hash ?? "-"}`,
  ];

  return lines.join("\n");
}

async function createAssociatedNote(
  token: string,
  contactId: string,
  lead: LeadRecord
): Promise<HubSpotRequestResult<{ id: string }>> {
  const note = await hubspotRequest<{ id: string }>(token, "/crm/v3/objects/notes", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: buildLeadNoteBody(lead),
      },
    }),
  });

  if (!note.ok || !note.data?.id) return note;

  const association = await hubspotRequest<unknown>(
    token,
    `/crm/v3/objects/notes/${note.data.id}/associations/contact/${contactId}/note_to_contact`,
    { method: "PUT" }
  );

  if (!association.ok) {
    return {
      ok: false,
      status: association.status,
      error: association.error ?? "Failed to associate note with contact",
    };
  }

  return note;
}

function looksLikeInvalidPropertyError(error: string | undefined): boolean {
  if (!error) return false;
  const normalized = error.toLowerCase();
  return normalized.includes("property") && (normalized.includes("invalid") || normalized.includes("does not exist"));
}

export async function syncLeadToHubSpot(
  env: HubSpotEnv,
  lead: LeadRecord
): Promise<HubSpotSyncResult> {
  const token = env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    return {
      success: false,
      customPropertiesApplied: false,
      customPropertiesSkipped: [],
      error: "HUBSPOT_ACCESS_TOKEN is not configured",
    };
  }

  try {
    const standardProperties = buildStandardProperties(lead);
    const customProperties = buildCustomProperties(lead);
    const fullProperties = { ...standardProperties, ...customProperties };
    let customPropertiesApplied = true;
    const customPropertiesSkipped: string[] = [];

    let contactResult = await createOrUpdateContact(token, fullProperties);

    if (!contactResult.ok && looksLikeInvalidPropertyError(contactResult.error)) {
      customPropertiesApplied = false;
      customPropertiesSkipped.push(...Object.keys(customProperties));
      contactResult = await createOrUpdateContact(token, standardProperties);
    }

    if (!contactResult.ok || !contactResult.data?.id) {
      return {
        success: false,
        customPropertiesApplied,
        customPropertiesSkipped,
        error: contactResult.error ?? "Failed to create or update HubSpot contact",
      };
    }

    const noteResult = await createAssociatedNote(token, contactResult.data.id, lead);

    if (!noteResult.ok || !noteResult.data?.id) {
      return {
        success: false,
        contactId: contactResult.data.id,
        customPropertiesApplied,
        customPropertiesSkipped,
        error: noteResult.error ?? "Failed to create HubSpot note",
      };
    }

    return {
      success: true,
      contactId: contactResult.data.id,
      noteId: noteResult.data.id,
      customPropertiesApplied,
      customPropertiesSkipped,
    };
  } catch (error) {
    return {
      success: false,
      customPropertiesApplied: false,
      customPropertiesSkipped: [],
      error: toErrorMessage(error),
    };
  }
}
