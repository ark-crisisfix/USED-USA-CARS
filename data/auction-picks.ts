import type { Locale } from "@/lib/i18n";

export type AuctionPick = {
  id: string;
  vehicle: string;
  year: string;
  source: string;
  lotNumber: string;
  currentPrice: string;
  targetTotal: string;
  destination: string;
  status: string;
  note: string;
  tags: string[];
};

export type AuctionPickSection = {
  id: string;
  title: string;
  subtitle: string;
  picks: AuctionPick[];
};

export function getAuctionPickSections(locale: Locale): AuctionPickSection[] {
  if (locale === "ru") {
    return [
      {
        id: "cheap-evs",
        title: "Доступные электромобили для Украины",
        subtitle: "Формат для дешевых и практичных EV, которые интересно считать под доставку в Украину.",
        picks: [
          {
            id: "leaf-2018",
            vehicle: "Nissan Leaf SV",
            year: "2018",
            source: "IAAI USA",
            lotNumber: "Demo lot #UA-101",
            currentPrice: "$2,450",
            targetTotal: "$7,900 landed",
            destination: "Ukraine",
            status: "Demo placeholder",
            note: "Типичный пример дешевого городского EV с понятной логистикой и предсказуемой итоговой экономикой.",
            tags: ["EV", "Cheap", "Ukraine", "City car"],
          },
          {
            id: "bolt-2019",
            vehicle: "Chevrolet Bolt EV LT",
            year: "2019",
            source: "Copart USA",
            lotNumber: "Demo lot #UA-102",
            currentPrice: "$3,900",
            targetTotal: "$9,800 landed",
            destination: "Ukraine",
            status: "Demo placeholder",
            note: "Хороший шаблон для блока с интересными EV до разумного бюджета под доставку и восстановление.",
            tags: ["EV", "Budget", "Ukraine", "Popular"],
          },
        ],
      },
      {
        id: "family-budget",
        title: "Семейные варианты с хорошей экономикой",
        subtitle: "Зона для седанов и кроссоверов, которые не выглядят дешево, но считаются адекватно.",
        picks: [
          {
            id: "escape-2020",
            vehicle: "Ford Escape SE",
            year: "2020",
            source: "IAA Canada",
            lotNumber: "Demo lot #UA-201",
            currentPrice: "$4,800",
            targetTotal: "$11,600 landed",
            destination: "Ukraine",
            status: "Demo placeholder",
            note: "Хорошая ниша для семейного кроссовера: умеренная цена на старте и понятный маршрут доставки.",
            tags: ["SUV", "Family", "Ukraine", "Budget"],
          },
          {
            id: "camry-2019",
            vehicle: "Toyota Camry LE",
            year: "2019",
            source: "ADESA Canada",
            lotNumber: "Demo lot #UA-202",
            currentPrice: "$5,200",
            targetTotal: "$10,900 landed",
            destination: "Ukraine",
            status: "Demo placeholder",
            note: "Пример для спокойного сценария: ликвидная модель, которую легко объяснять клиенту по итоговой стоимости.",
            tags: ["Sedan", "Toyota", "Ukraine", "Liquid"],
          },
        ],
      },
      {
        id: "uae-luxury",
        title: "Лакшери-подборка для ОАЭ",
        subtitle: "Тут можно показывать самые эффектные варианты под аудиторию, которая ищет статус и интересную цену входа.",
        picks: [
          {
            id: "g63-2021",
            vehicle: "Mercedes-Benz G63 AMG",
            year: "2021",
            source: "Copart USA",
            lotNumber: "Demo lot #UAE-301",
            currentPrice: "$42,000",
            targetTotal: "$58,500 landed",
            destination: "UAE",
            status: "Demo placeholder",
            note: "Пример дорогого имиджевого лота: высокий интерес, сильный вау-эффект и понятный рекламный посыл.",
            tags: ["Luxury", "UAE", "AMG", "High demand"],
          },
          {
            id: "urus-2020",
            vehicle: "Lamborghini Urus",
            year: "2020",
            source: "IAAI USA",
            lotNumber: "Demo lot #UAE-302",
            currentPrice: "$68,000",
            targetTotal: "$88,000 landed",
            destination: "UAE",
            status: "Demo placeholder",
            note: "Правильный showcase-лот для дорогой витрины: захватывает внимание и хорошо работает на премиальный трафик.",
            tags: ["Luxury", "UAE", "Super SUV", "Showcase"],
          },
        ],
      },
      {
        id: "interesting-deals",
        title: "Интересные лоты недели",
        subtitle: "Секция под необычные или явно недооцененные варианты, которые хочется выделить отдельно.",
        picks: [
          {
            id: "a6-allroad-2020",
            vehicle: "Audi A6 Allroad",
            year: "2020",
            source: "IAA Canada",
            lotNumber: "Demo lot #INT-401",
            currentPrice: "$8,900",
            targetTotal: "$16,400 landed",
            destination: "Poland / Baltics",
            status: "Demo placeholder",
            note: "Пример лота, который выглядит нестандартно и может привлечь более насмотренную аудиторию.",
            tags: ["Wagon", "Europe", "Interesting", "Niche"],
          },
          {
            id: "model3-2021",
            vehicle: "Tesla Model 3",
            year: "2021",
            source: "Copart USA",
            lotNumber: "Demo lot #INT-402",
            currentPrice: "$10,500",
            targetTotal: "$18,700 landed",
            destination: "Ukraine / Europe",
            status: "Demo placeholder",
            note: "Подходит как универсальный пример для weekly selection и коммерческого SEO по электромобилям.",
            tags: ["Tesla", "EV", "Weekly pick", "Trending"],
          },
        ],
      },
    ];
  }

  return [
    {
      id: "cheap-evs",
      title: "Affordable EVs for Ukraine",
      subtitle: "A placeholder format for cheap, practical EVs that make sense for the Ukraine route.",
      picks: [
        {
          id: "leaf-2018",
          vehicle: "Nissan Leaf SV",
          year: "2018",
          source: "IAAI USA",
          lotNumber: "Demo lot #UA-101",
          currentPrice: "$2,450",
          targetTotal: "$7,900 landed",
          destination: "Ukraine",
          status: "Demo placeholder",
          note: "A typical city EV example with manageable logistics and a predictable landed-cost story.",
          tags: ["EV", "Cheap", "Ukraine", "City car"],
        },
        {
          id: "bolt-2019",
          vehicle: "Chevrolet Bolt EV LT",
          year: "2019",
          source: "Copart USA",
          lotNumber: "Demo lot #UA-102",
          currentPrice: "$3,900",
          targetTotal: "$9,800 landed",
          destination: "Ukraine",
          status: "Demo placeholder",
          note: "A good template for low-cost EV opportunities that still feel practical after shipping and repair.",
          tags: ["EV", "Budget", "Ukraine", "Popular"],
        },
      ],
    },
    {
      id: "family-budget",
      title: "Budget-friendly family cars",
      subtitle: "This is where practical sedans and family SUVs can live once your weekly lot board is running.",
      picks: [
        {
          id: "escape-2020",
          vehicle: "Ford Escape SE",
          year: "2020",
          source: "IAA Canada",
          lotNumber: "Demo lot #UA-201",
          currentPrice: "$4,800",
          targetTotal: "$11,600 landed",
          destination: "Ukraine",
          status: "Demo placeholder",
          note: "A solid family crossover example: reasonable auction price, understandable route, and approachable final cost.",
          tags: ["SUV", "Family", "Ukraine", "Budget"],
        },
        {
          id: "camry-2019",
          vehicle: "Toyota Camry LE",
          year: "2019",
          source: "ADESA Canada",
          lotNumber: "Demo lot #UA-202",
          currentPrice: "$5,200",
          targetTotal: "$10,900 landed",
          destination: "Ukraine",
          status: "Demo placeholder",
          note: "A calmer value story for customers who care about liquidity and predictable ownership economics.",
          tags: ["Sedan", "Toyota", "Ukraine", "Liquid"],
        },
      ],
    },
    {
      id: "uae-luxury",
      title: "Luxury picks for UAE buyers",
      subtitle: "A natural section for the most impressive and high-ticket lots that work for UAE demand.",
      picks: [
        {
          id: "g63-2021",
          vehicle: "Mercedes-Benz G63 AMG",
          year: "2021",
          source: "Copart USA",
          lotNumber: "Demo lot #UAE-301",
          currentPrice: "$42,000",
          targetTotal: "$58,500 landed",
          destination: "UAE",
          status: "Demo placeholder",
          note: "A classic attention-grabbing luxury lot with strong visual appeal and clear premium positioning.",
          tags: ["Luxury", "UAE", "AMG", "High demand"],
        },
        {
          id: "urus-2020",
          vehicle: "Lamborghini Urus",
          year: "2020",
          source: "IAAI USA",
          lotNumber: "Demo lot #UAE-302",
          currentPrice: "$68,000",
          targetTotal: "$88,000 landed",
          destination: "UAE",
          status: "Demo placeholder",
          note: "A premium showcase lot that works well for ad traffic, curated highlights, and social proof.",
          tags: ["Luxury", "UAE", "Super SUV", "Showcase"],
        },
      ],
    },
    {
      id: "interesting-deals",
      title: "Interesting deals of the week",
      subtitle: "A section for unusual, overlooked, or especially attractive opportunities you want to feature.",
      picks: [
        {
          id: "a6-allroad-2020",
          vehicle: "Audi A6 Allroad",
          year: "2020",
          source: "IAA Canada",
          lotNumber: "Demo lot #INT-401",
          currentPrice: "$8,900",
          targetTotal: "$16,400 landed",
          destination: "Poland / Baltics",
          status: "Demo placeholder",
          note: "A more niche example that helps the board feel curated rather than generic.",
          tags: ["Wagon", "Europe", "Interesting", "Niche"],
        },
        {
          id: "model3-2021",
          vehicle: "Tesla Model 3",
          year: "2021",
          source: "Copart USA",
          lotNumber: "Demo lot #INT-402",
          currentPrice: "$10,500",
          targetTotal: "$18,700 landed",
          destination: "Ukraine / Europe",
          status: "Demo placeholder",
          note: "A flexible weekly pick that also fits future SEO pages around EV demand and auction opportunities.",
          tags: ["Tesla", "EV", "Weekly pick", "Trending"],
        },
      ],
    },
  ];
}
