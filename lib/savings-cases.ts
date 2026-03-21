import raw from "@/data/savings-cases.json";
import type { SavingsCase } from "@/lib/types/commerce";

const list = raw as SavingsCase[];

export function getAllSavingsCases(): SavingsCase[] {
  return list;
}

export function getFeaturedCasesForHome(max = 3): SavingsCase[] {
  const featured = list.filter((c) => c.is_featured_homepage);
  const ua = featured.filter((c) => c.destination === "ukraine").slice(0, 2);
  const uae = featured.filter((c) => c.destination === "uae").slice(0, 1);
  const merged = [...ua, ...uae];
  if (merged.length >= max) return merged.slice(0, max);
  return featured.slice(0, max);
}

export function getSavingsCaseBySlug(slug: string): SavingsCase | undefined {
  return list.find((c) => c.slug === slug);
}

export function getSavingsCaseStaticParams() {
  return list.map((c) => ({ slug: c.slug }));
}

export function destinationBadge(dest: SavingsCase["destination"]): string {
  const m: Record<SavingsCase["destination"], string> = {
    ukraine: "Ukraine",
    uae: "UAE",
    canada: "Canada",
    worldwide: "Other",
  };
  return m[dest] ?? dest;
}

export function caseTypeLabel(type: SavingsCase["case_type"]): string {
  const m: Record<SavingsCase["case_type"], string> = {
    salvage_repair: "Salvage + repair",
    clean_export: "Clean export",
    local_resale: "Local resale",
    ready_inventory: "Ready inventory",
  };
  return m[type] ?? type;
}

export function deliveryFeesTotal(c: SavingsCase): number {
  return c.auction_fees + c.inland_transport + c.ocean_shipping + c.customs;
}
