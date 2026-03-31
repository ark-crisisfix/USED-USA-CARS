import raw from "@/data/ready-cars.json";
import type { Locale } from "@/lib/i18n";
import type { ReadyCar } from "@/lib/types/commerce";

const list = raw as ReadyCar[];

export function getAllReadyCars(): ReadyCar[] {
  return list;
}

export function getFeaturedReadyCarsForHome(max = 6): ReadyCar[] {
  return list.filter((c) => c.is_featured_homepage && c.status !== "sold").slice(0, max);
}

export function getReadyCarBySlug(slug: string): ReadyCar | undefined {
  return list.find((c) => c.slug === slug);
}

export function getReadyCarStaticParams() {
  return list.map((c) => ({ slug: c.slug }));
}

export function statusDisplay(status: ReadyCar["status"], locale: Locale = "en"): string {
  if (locale === "ru") {
    const m: Record<ReadyCar["status"], string> = {
      available: "В наличии в Канаде",
      ready_to_ship: "Готов к отправке",
      in_transit: "В пути",
      reserved: "Зарезервирован",
      sold: "Продан",
    };
    return m[status] ?? status;
  }

  const m: Record<ReadyCar["status"], string> = {
    available: "Available in Canada",
    ready_to_ship: "Ready to Ship",
    in_transit: "In Transit",
    reserved: "Reserved",
    sold: "Sold",
  };
  return m[status] ?? status;
}

export function conditionDisplay(c: ReadyCar["condition"], locale: Locale = "en"): string {
  if (locale === "ru") {
    const map: Record<ReadyCar["condition"], string> = {
      clean: "Без серьезных повреждений",
      salvage: "После страхового списания",
      repaired: "Восстановлен",
      as_is: "Как есть",
    };
    return map[c] ?? c;
  }

  const map: Record<ReadyCar["condition"], string> = {
    clean: "Clean",
    salvage: "Salvage",
    repaired: "Repaired",
    as_is: "As Is",
  };
  return map[c] ?? c;
}

export function titleStatusDisplay(t: ReadyCar["title_status"], locale: Locale = "en"): string {
  if (locale === "ru") {
    const map: Record<ReadyCar["title_status"], string> = {
      clean_title: "Чистый title",
      salvage_title: "Salvage title",
      rebuilt_title: "Rebuilt title",
      unknown: "Статус документов предоставляется по запросу",
    };
    return map[t] ?? t;
  }

  const map: Record<ReadyCar["title_status"], string> = {
    clean_title: "Clean Title",
    salvage_title: "Salvage Title",
    rebuilt_title: "Rebuilt Title",
    unknown: "Title status available on request",
  };
  return map[t] ?? t;
}
