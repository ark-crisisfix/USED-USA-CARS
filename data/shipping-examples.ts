export type ShippingExample = {
  id: string;
  market: "ukraine" | "uae";
  vehicle: string;
  auctionPriceUsd: number;
  finalPriceUsd: number;
  lotDate: string;
  mileage: string;
  damage: string;
  descriptionEn: string;
  descriptionRu: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const shippingExamples: Record<"ukraine" | "uae", ShippingExample[]> = {
  ukraine: [
    {
      id: "ua-leaf-2018",
      market: "ukraine",
      vehicle: "2018 Nissan Leaf S",
      auctionPriceUsd: 4200,
      finalPriceUsd: 9300,
      lotDate: "May 21, 2024",
      mileage: "43,463 mi",
      damage: "Rear end",
      descriptionEn:
        "Low-entry EV example for Ukraine. Cheap auction buy, simple hatchback format, and realistic total budget after fees, shipping, customs, broker, and service.",
      descriptionRu:
        "Недорогой электромобиль для Украины. Низкая цена на аукционе и понятный итоговый бюджет после сборов, доставки, таможни, брокера и сервиса.",
      sourceLabel: "HideCars auction history",
      sourceUrl: "https://hidecars.vin/en/auction/lot-52797614-1n4az1cp5jc314046/",
    },
    {
      id: "ua-egolf-2019",
      market: "ukraine",
      vehicle: "2019 Volkswagen e-Golf SEL Premium",
      auctionPriceUsd: 4150,
      finalPriceUsd: 9400,
      lotDate: "June 11, 2024",
      mileage: "18,095 mi",
      damage: "Front end",
      descriptionEn:
        "Another practical EV example for Ukraine. Compact body, affordable hammer price, and a landed total still well below many local retail asks.",
      descriptionRu:
        "Практичный электрический вариант для Украины. Компактный кузов, доступная ставка на аукционе и итоговая цена заметно ниже многих локальных предложений.",
      sourceLabel: "HideCars auction history",
      sourceUrl: "https://hidecars.vin/pl/auction/lot-56068364-wvwpr7au1kw911128/",
    },
    {
      id: "ua-bolt-2020",
      market: "ukraine",
      vehicle: "2020 Chevrolet Bolt EV",
      auctionPriceUsd: 10125,
      finalPriceUsd: 16800,
      lotDate: "August 21, 2023",
      mileage: "42,555 km",
      damage: "Side",
      descriptionEn:
        "For buyers who want more range than Leaf or e-Golf. The auction buy was still relatively affordable, while the delivered total remains in the budget EV zone.",
      descriptionRu:
        "Для тех, кому нужен больший запас хода, чем у Leaf или e-Golf. Аукционная покупка всё ещё доступная, а итоговая цена остаётся в разумном бюджете для EV.",
      sourceLabel: "HideCars auction history",
      sourceUrl:
        "https://hidecars.vin/en/auction/brand-chevrolet%2Cmodel-bolt%2Cpage-475/",
    },
  ],
  uae: [
    {
      id: "uae-urus-2019",
      market: "uae",
      vehicle: "2019 Lamborghini Urus",
      auctionPriceUsd: 142000,
      finalPriceUsd: 160500,
      lotDate: "May 1, 2025",
      mileage: "17,842 mi",
      damage: "Runs, certificate: other",
      descriptionEn:
        "Luxury SUV example for UAE buyers who want a premium performance car from auction stock with a strong value gap versus retail showroom pricing.",
      descriptionRu:
        "Пример лакшери-SUV для ОАЭ: дорогой и статусный автомобиль с аукциона, где разница относительно showroom-цены всё ещё остаётся интересной.",
      sourceLabel: "autoAstat auction history",
      sourceUrl: "https://autoastat.com/en/vehicle/ZPBUA1ZL6KLA02282-56590248",
    },
    {
      id: "uae-cullinan-2021",
      market: "uae",
      vehicle: "2021 Rolls-Royce Cullinan",
      auctionPriceUsd: 198000,
      finalPriceUsd: 221000,
      lotDate: "August 6, 2025",
      mileage: "14,607 mi",
      damage: "Runs, clean certificate",
      descriptionEn:
        "High-ticket UAE example aimed at buyers looking for maximum prestige. Even at this level, the auction route can still produce a meaningful spread.",
      descriptionRu:
        "Дорогой пример для ОАЭ для клиента, которому нужен максимум статуса. Даже на таком уровне аукционный путь может давать заметную экономику.",
      sourceLabel: "autoAstat auction history",
      sourceUrl: "https://autoastat.com/en/vehicle/SLATV4C01MU208475-59211407",
    },
    {
      id: "uae-g63-2025",
      market: "uae",
      vehicle: "2025 Mercedes-Benz G63 AMG",
      auctionPriceUsd: 133000,
      finalPriceUsd: 151000,
      lotDate: "November 26, 2025",
      mileage: "0 mi",
      damage: "Front end",
      descriptionEn:
        "Statement SUV example for UAE demand. Strong spec, strong brand pull, and a landed total that can still undercut local luxury-market pricing.",
      descriptionRu:
        "Показательный SUV-кейс под рынок ОАЭ. Сильная комплектация, сильный бренд и итоговая стоимость, которая всё ещё может быть выгоднее локального luxury-рынка.",
      sourceLabel: "autoAstat auction history",
      sourceUrl: "https://autoastat.com/en/vehicle/W1NWH5AB8SX034531-62291883",
    },
  ],
};
