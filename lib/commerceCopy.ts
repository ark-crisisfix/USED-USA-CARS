import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    readySectionTitle: "Cars Available Now",
    readySectionSub:
      "Already purchased vehicles available in Canada or ready for shipping worldwide.",
    readyViewAll: "View All Ready Cars",
    readyRequest: "Request This Car",
    readyViewDetails: "View Details",
    readyBadgeExample: "Details available on request.",
    realCasesTitle: "Real Purchase Cases",
    realCasesSub: "Transparent examples with auction price, shipping, repair, and final savings.",
    viewAllCases: "View All Cases",
    viewCase: "View Case",
    estimateLabel: "Example estimate",
    auctionPrice: "Auction price",
    deliveryFees: "Delivery / fees",
    repair: "Repair",
    finalTotal: "Final total",
    estMarket: "Est. market",
    saved: "Client saved (est.)",
    destination: "Destination",
    savingsCasesTitle: "Savings Cases",
    readyPageH1: "Ready Cars Available in Canada and for Export",
    readyPageIntro:
      "Vehicles already purchased by the company or partner and currently available for local sale in Canada or export to Ukraine, UAE, or other destinations.",
    casesPageH1: "Real Purchase Cases",
    casesPageIntro:
      "Transparent cost breakdowns: auction, logistics, repair where applicable, and comparison to destination market levels. Figures marked as example estimates are illustrative, not guarantees.",
  },
  ru: {
    readySectionTitle: "Авто в наличии",
    readySectionSub:
      "Уже выкупленные авто в Канаде или готовые к отправке.",
    readyViewAll: "Все авто в наличии",
    readyRequest: "Запросить это авто",
    readyViewDetails: "Подробнее",
    readyBadgeExample: "Детали по запросу.",
    realCasesTitle: "Реальные кейсы закупки",
    realCasesSub: "Аукцион, доставка, ремонт и итоговая экономия.",
    viewAllCases: "Все кейсы",
    viewCase: "Кейс",
    estimateLabel: "Оценочный пример",
    auctionPrice: "Аукцион",
    deliveryFees: "Доставка / сборы",
    repair: "Ремонт",
    finalTotal: "Итого",
    estMarket: "Рынок (оценка)",
    saved: "Экономия (оценка)",
    destination: "Направление",
    savingsCasesTitle: "Кейсы экономии",
    readyPageH1: "Авто в наличии — Канада и экспорт",
    readyPageIntro:
      "Уже выкупленные машины для продажи в Канаде или экспорта в Украину, ОАЭ и другие направления.",
    casesPageH1: "Кейсы закупки с разбивкой затрат",
    casesPageIntro:
      "Прозрачная структура: аукцион, логистика, ремонт при необходимости, сравнение с рынком. Позиции с пометкой «оценочный пример» иллюстративны.",
  },
} as const;

export function commerce(locale: Locale) {
  return locale === "ru" ? copy.ru : copy.en;
}
