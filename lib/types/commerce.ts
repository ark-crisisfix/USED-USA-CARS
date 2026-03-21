/** Ready inventory (company-owned / partner) */
export type ReadyCarStatus =
  | "available"
  | "ready_to_ship"
  | "in_transit"
  | "reserved"
  | "sold";

export type ReadyCarCondition = "clean" | "salvage" | "repaired" | "as_is";

export type TitleStatus = "clean_title" | "salvage_title" | "rebuilt_title" | "unknown";

export type DestinationTag = "canada" | "ukraine" | "uae" | "worldwide";

export interface ReadyCar {
  id: string;
  slug: string;
  year: number;
  make: string;
  model: string;
  mileage: string;
  mileage_unit?: "mi" | "km";
  condition: ReadyCarCondition;
  title_status: TitleStatus;
  status: ReadyCarStatus;
  location: string;
  currency: "CAD" | "USD";
  price: number;
  price_note?: string;
  description: string;
  images: string[];
  destination_tags: DestinationTag[];
  is_featured_homepage: boolean;
  is_ready: boolean;
  is_sold: boolean;
  short_note?: string;
  vin_last6?: string;
  engine?: string;
  drivetrain?: string;
  fuel_type?: string;
  logistics_note?: string;
  best_for?: {
    canada_local?: boolean;
    ukraine_repair?: boolean;
    uae_export?: boolean;
  };
  created_at: string;
  updated_at: string;
}

/** Economic proof cases */
export type CaseDestination = "ukraine" | "uae" | "canada" | "worldwide";

export type CaseType = "salvage_repair" | "clean_export" | "local_resale" | "ready_inventory";

export interface SavingsCase {
  id: string;
  slug: string;
  year: number;
  make: string;
  model: string;
  destination: CaseDestination;
  destination_label: string;
  case_type: CaseType;
  auction_price: number;
  auction_fees: number;
  inland_transport: number;
  ocean_shipping: number;
  customs: number;
  repair_cost: number | null;
  final_total: number;
  market_price: number;
  estimated_savings: number;
  currency: string;
  summary: string;
  verdict: string;
  before_images: string[];
  after_images: string[];
  is_featured_homepage: boolean;
  is_real_case: boolean;
  is_estimate: boolean;
  client_label?: string;
  created_at: string;
  updated_at: string;
}

export type LeadFormType =
  | "general"
  | "ready_car"
  | "similar_car"
  | "shipping"
  | "calculator"
  | "case_similar";

export interface LeadPayload {
  name: string;
  contact: string;
  budget: string;
  destination: string;
  preferred_vehicle?: string;
  condition_preference?: string;
  message?: string;
  source_page: string;
  form_type: LeadFormType;
  source_context?: string;
  car_reference_id?: string;
  ready_car_reference_id?: string;
  case_reference_id?: string;
  website?: string;
  timestamp: string;
  user_agent?: string;
  referrer?: string;
}
