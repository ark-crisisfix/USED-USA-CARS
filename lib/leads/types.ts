export type LeadFormType =
  | "general"
  | "ready_car"
  | "similar_car"
  | "shipping"
  | "calculator"
  | "case_similar";

export type LeadRequestPayload = {
  name?: unknown;
  contact?: unknown;
  budget?: unknown;
  destination?: unknown;
  preferred_vehicle?: unknown;
  condition_preference?: unknown;
  message?: unknown;
  source_context?: unknown;
  page_url?: unknown;
  form_type?: unknown;
  ready_car_reference_id?: unknown;
  case_reference_id?: unknown;
  car_reference_id?: unknown;
  honeypot?: unknown;
};

export type LeadRecord = {
  name: string;
  contact: string;
  budget: string;
  destination: string;
  preferred_vehicle: string | null;
  condition_preference: string | null;
  message: string | null;
  source_context: string | null;
  page_url: string | null;
  form_type: LeadFormType;
  ready_car_reference_id: string | null;
  case_reference_id: string | null;
  car_reference_id: string | null;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
};

export type LeadFailureCode =
  | "VALIDATION_ERROR"
  | "SPAM"
  | "CONFIG_ERROR"
  | "PERSISTENCE_ERROR"
  | "UNKNOWN_ERROR";

export type LeadSuccessResponse = {
  ok: true;
  persisted: true;
  hubspot_synced: true;
  email_sent: boolean;
};

export type LeadFailureResponse = {
  ok: false;
  persisted: false;
  error_code: LeadFailureCode;
  message: string;
};

export type LeadResponse = LeadSuccessResponse | LeadFailureResponse;

export type LeadRequestContext = {
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
};

