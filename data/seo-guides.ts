export type SeoGuideLocale = "en" | "ru" | "uk";

export type SeoGuide = {
  slug: string;
  updatedAt: string;
  readingMinutes: number;
  category: {
    en: string;
    ru: string;
    uk: string;
  };
  title: {
    en: string;
    ru: string;
    uk: string;
  };
  description: {
    en: string;
    ru: string;
    uk: string;
  };
  intro: {
    en: string;
    ru: string;
    uk: string;
  };
  sections: Array<{
    title: {
      en: string;
      ru: string;
      uk: string;
    };
    body: {
      en: string;
      ru: string;
      uk: string;
    };
  }>;
};

export const seoGuides: SeoGuide[] = [
  {
    slug: "how-us-auction-car-delivery-works",
    updatedAt: "2026-03-23",
    readingMinutes: 4,
    category: {
      en: "Import Basics",
      ru: "База импорта",
      uk: "База імпорту",
    },
    title: {
      en: "How US auction car delivery works from bid to final handover",
      ru: "Как работает доставка авто с аукционов США от ставки до передачи клиенту",
      uk: "Як працює доставка авто з аукціонів США від ставки до передачі клієнту",
    },
    description: {
      en: "A short guide explaining how buying, shipping, customs, and delivery from US car auctions usually work for international buyers.",
      ru: "Короткий гид о том, как обычно устроены покупка, доставка, таможня и передача авто с аукционов США для международных клиентов.",
      uk: "Короткий гід про те, як зазвичай влаштовані купівля, доставка, митне оформлення та передача авто з аукціонів США для міжнародних клієнтів.",
    },
    intro: {
      en: "For most buyers, the process looks complicated only before the first transaction. In practice, the route is built from several understandable stages: selecting a lot, checking history, bidding, paying the auction invoice, inland transport in the US, ocean freight, customs, and final handover in the destination country.",
      ru: "Для большинства клиентов процесс кажется сложным только до первой сделки. На практике маршрут состоит из понятных этапов: подбор лота, проверка истории, ставка, оплата аукциона, доставка по США, морской фрахт, таможня и финальная передача в стране назначения.",
      uk: "Для більшості клієнтів процес здається складним лише до першої угоди. Насправді маршрут складається з зрозумілих етапів: підбір лота, перевірка історії, ставка, оплата аукціону, доставка по США, морський фрахт, митниця та фінальна передача в країні призначення.",
    },
    sections: [
      {
        title: {
          en: "1. Vehicle selection always matters more than the auction bid itself",
          ru: "1. Подбор автомобиля важнее самой ставки на аукционе",
          uk: "1. Підбір автомобіля важливіший за саму ставку на аукціоні",
        },
        body: {
          en: "The cheapest lot is rarely the best deal. Buyers usually compare title status, damage type, mileage, photos, model liquidity, and expected repair budget before bidding. A clean or light-damage car may cost more at auction but create a safer final total.",
          ru: "Самый дешёвый лот редко бывает лучшей покупкой. Обычно до ставки сравнивают статус title, тип повреждений, пробег, фото, ликвидность модели и ожидаемый бюджет ремонта. Чистый или легко повреждённый автомобиль может стоить дороже на аукционе, но давать более безопасную итоговую экономику.",
          uk: "Найдешевший лот рідко є найкращою покупкою. До ставки зазвичай порівнюють статус title, тип пошкоджень, пробіг, фото, ліквідність моделі та очікуваний бюджет ремонту. Чистий або легко пошкоджений автомобіль може коштувати дорожче на аукціоні, але давати безпечнішу підсумкову економіку.",
        },
      },
      {
        title: {
          en: "2. Logistics is a chain, not one single shipment",
          ru: "2. Логистика — это цепочка, а не одна перевозка",
          uk: "2. Логістика — це ланцюг, а не одне перевезення",
        },
        body: {
          en: "After the auction, the car first moves from the yard to a US warehouse or port. Then ocean freight starts, often toward Europe or the Middle East, after which destination-side handling, customs, and local delivery begin. This is why timelines depend on route, port congestion, and document speed.",
          ru: "После аукциона автомобиль сначала едет с площадки на склад или в порт в США. Затем начинается морской этап, часто в сторону Европы или Ближнего Востока, после чего подключаются разгрузка, таможня и локальная доставка. Поэтому сроки зависят от маршрута, загрузки портов и скорости документов.",
          uk: "Після аукціону автомобіль спочатку їде з майданчика на склад або в порт у США. Потім починається морський етап, часто у бік Європи або Близького Сходу, після чого підключаються розвантаження, митниця та локальна доставка. Саме тому строки залежать від маршруту, завантаження портів і швидкості документів.",
        },
      },
      {
        title: {
          en: "3. Final price is built from several blocks, not from the lot price alone",
          ru: "3. Итоговая цена состоит из нескольких блоков, а не только из цены лота",
          uk: "3. Підсумкова ціна складається з кількох блоків, а не лише з ціни лота",
        },
        body: {
          en: "A realistic estimate normally includes the auction bid, auction fees, inland US transport, ocean freight, broker or service fee, customs, and destination-side costs. For repairable cars, buyers also add local restoration and certification. That is why a good calculator and a transparent route page help SEO and conversion at the same time.",
          ru: "Реальный расчёт обычно включает ставку на аукционе, сборы аукциона, доставку по США, морской фрахт, брокерский или сервисный fee, таможню и расходы на стороне назначения. Для восстановимых машин отдельно учитывают локальный ремонт и сертификацию. Поэтому хороший калькулятор и прозрачная маршрутная страница одновременно помогают и SEO, и конверсии.",
          uk: "Реалістичний розрахунок зазвичай включає ставку на аукціоні, збори аукціону, доставку по США, морський фрахт, брокерський або сервісний fee, митницю та витрати на стороні призначення. Для авто під відновлення окремо враховують локальний ремонт і сертифікацію. Саме тому хороший калькулятор і прозора маршрутна сторінка одночасно допомагають і SEO, і конверсії.",
        },
      },
    ],
  },
  {
    slug: "delivery-times-customs-and-total-cost-explained",
    updatedAt: "2026-03-23",
    readingMinutes: 4,
    category: {
      en: "Pricing & Logistics",
      ru: "Цены и логистика",
      uk: "Ціни та логістика",
    },
    title: {
      en: "Delivery times, customs, and total cost for US auction cars explained simply",
      ru: "Сроки доставки, таможня и итоговая стоимость авто с аукционов США простым языком",
      uk: "Строки доставки, митниця та підсумкова вартість авто з аукціонів США простими словами",
    },
    description: {
      en: "A practical summary of what changes the final price and delivery timing when shipping a car from US auctions.",
      ru: "Практичное объяснение того, что влияет на итоговую стоимость и сроки доставки автомобиля с аукционов США.",
      uk: "Практичне пояснення того, що впливає на підсумкову вартість і строки доставки автомобіля з аукціонів США.",
    },
    intro: {
      en: "Search traffic often comes from buyers who want one simple answer: how much will the car really cost and how long will it take? The honest answer depends on route, vehicle condition, customs model, and the speed of port handling. Still, the structure of the estimate is predictable enough to explain clearly on SEO pages.",
      ru: "Поисковый трафик часто приходит от клиентов, которым нужен простой ответ: сколько автомобиль реально будет стоить и сколько времени займёт доставка. Честный ответ зависит от маршрута, состояния машины, модели таможни и скорости работы портов. Но сама логика расчёта достаточно предсказуема, чтобы её понятно объяснять на SEO-страницах.",
      uk: "Пошуковий трафік часто приходить від клієнтів, яким потрібна проста відповідь: скільки авто реально коштуватиме та скільки часу займе доставка. Чесна відповідь залежить від маршруту, стану машини, моделі митниці та швидкості роботи портів. Але сама логіка розрахунку достатньо передбачувана, щоб її зрозуміло пояснювати на SEO-сторінках.",
    },
    sections: [
      {
        title: {
          en: "1. Delivery times depend mostly on the route, not on the model",
          ru: "1. Срок доставки зависит в первую очередь от маршрута, а не от модели",
          uk: "1. Строк доставки залежить насамперед від маршруту, а не від моделі",
        },
        body: {
          en: "An East Coast departure usually works differently from a West Coast one. Delivery to Ukraine through European ports has a different rhythm than delivery to Jebel Ali or a Baltic route. This is why destination-specific landing pages perform well in SEO: they answer the timing question directly.",
          ru: "Отправка с восточного побережья США обычно работает иначе, чем с западного. Доставка в Украину через европейские порты отличается по логике от доставки в Джебель-Али или в Балтику. Именно поэтому отдельные страницы по направлениям хорошо работают в SEO: они прямо отвечают на вопрос о сроках.",
          uk: "Відправлення зі східного узбережжя США зазвичай працює інакше, ніж із західного. Доставка в Україну через європейські порти відрізняється від доставки в Джебель-Алі чи в Балтію. Саме тому окремі сторінки за напрямками добре працюють у SEO: вони прямо відповідають на питання про строки.",
        },
      },
      {
        title: {
          en: "2. Customs should be explained before the buyer places a bid",
          ru: "2. Таможню нужно объяснять ещё до ставки на аукционе",
          uk: "2. Митницю потрібно пояснювати ще до ставки на аукціоні",
        },
        body: {
          en: "For some countries, customs duty is a major part of the budget. For others, port handling, VAT, or certification may matter more. If a route page and calculator explain this before the purchase, the client sees a full picture and search engines see useful expert content instead of generic sales text.",
          ru: "Для одних стран таможенные платежи — это ключевая часть бюджета. Для других важнее портовые сборы, VAT или сертификация. Если маршрутная страница и калькулятор объясняют это ещё до покупки, клиент получает целостную картину, а поисковая система видит экспертный контент вместо общего рекламного текста.",
          uk: "Для одних країн митні платежі — це ключова частина бюджету. Для інших важливіші портові збори, VAT або сертифікація. Якщо маршрутна сторінка та калькулятор пояснюють це ще до покупки, клієнт отримує цілісну картину, а пошукова система бачить експертний контент замість загального рекламного тексту.",
        },
      },
      {
        title: {
          en: "3. Short educational articles help search visibility for long-tail queries",
          ru: "3. Короткие обучающие статьи помогают по long-tail запросам",
          uk: "3. Короткі навчальні статті допомагають за long-tail запитами",
        },
        body: {
          en: "Queries such as “how long does shipping from Copart to Ukraine take” or “auction car final cost to UAE” often convert better than broad terms. A compact article that answers one practical question can rank faster than a generic homepage block because its intent is much clearer.",
          ru: "Запросы вроде “сколько идёт доставка Copart в Украину” или “итоговая стоимость авто с аукциона в ОАЭ” часто конвертируют лучше широких фраз. Небольшая статья, отвечающая на один практический вопрос, может ранжироваться быстрее, чем общий блок на главной, потому что её интент гораздо понятнее.",
          uk: "Запити на кшталт “скільки йде доставка Copart в Україну” або “підсумкова вартість авто з аукціону в ОАЕ” часто конвертують краще за широкі фрази. Невелика стаття, що відповідає на одне практичне питання, може ранжуватися швидше, ніж загальний блок на головній, тому що її інтенція набагато зрозуміліша.",
        },
      },
    ],
  },
  {
    slug: "which-cars-work-best-for-ukraine-uae-and-europe",
    updatedAt: "2026-03-23",
    readingMinutes: 4,
    category: {
      en: "Market Selection",
      ru: "Выбор под рынок",
      uk: "Підбір під ринок",
    },
    title: {
      en: "Which cars fit Ukraine, UAE, and Europe best when buying from US auctions",
      ru: "Какие автомобили лучше подходят для Украины, ОАЭ и Европы при покупке с аукционов США",
      uk: "Які автомобілі краще підходять для України, ОАЕ та Європи при купівлі з аукціонів США",
    },
    description: {
      en: "A short guide to choosing cheaper EVs, practical family cars, and luxury export models for different destinations.",
      ru: "Короткий гид по выбору недорогих EV, практичных семейных автомобилей и дорогих export-моделей для разных направлений.",
      uk: "Короткий гід з вибору недорогих EV, практичних сімейних автомобілів і дорогих export-моделей для різних напрямків.",
    },
    intro: {
      en: "Not every car that looks cheap at auction is actually a good fit for the destination market. Buyers usually win more when they choose a model that matches local demand, repair economics, climate, and registration reality. That is why route pages and case studies should talk about the right vehicles, not just the lowest bids.",
      ru: "Не каждый автомобиль, который кажется дешёвым на аукционе, действительно подходит под рынок назначения. Клиент обычно выигрывает больше, когда выбирает модель, соответствующую локальному спросу, экономике ремонта, климату и регистрационной реальности. Поэтому маршрутные страницы и кейсы должны говорить не только о низкой ставке, но и о правильном автомобиле.",
      uk: "Не кожен автомобіль, який здається дешевим на аукціоні, справді підходить під ринок призначення. Клієнт зазвичай виграє більше, коли вибирає модель, що відповідає локальному попиту, економіці ремонту, клімату та реєстраційній реальності. Саме тому маршрутні сторінки та кейси повинні говорити не лише про низьку ставку, а й про правильний автомобіль.",
    },
    sections: [
      {
        title: {
          en: "1. Ukraine often performs well with cheaper EVs and repairable mass-market cars",
          ru: "1. Для Украины часто лучше работают недорогие EV и массовые ремонтируемые модели",
          uk: "1. Для України часто краще працюють недорогі EV та масові автомобілі під відновлення",
        },
        body: {
          en: "Low-entry EVs such as Nissan Leaf, e-Golf, or Bolt can create attractive total budgets. Repairable sedans and family crossovers also stay relevant when parts availability and final customs economics remain under control.",
          ru: "Недорогие EV вроде Nissan Leaf, e-Golf или Bolt могут давать привлекательный итоговый бюджет. Также хорошо работают ремонтируемые седаны и семейные кроссоверы, когда доступность запчастей и общая таможенная экономика остаются под контролем.",
          uk: "Недорогі EV на кшталт Nissan Leaf, e-Golf або Bolt можуть давати привабливий підсумковий бюджет. Також добре працюють автомобілі під відновлення: седани та сімейні кросовери, якщо доступність запчастин і загальна митна економіка залишаються під контролем.",
        },
      },
      {
        title: {
          en: "2. UAE usually needs cleaner, higher-spec, higher-status inventory",
          ru: "2. Для ОАЭ обычно нужен более чистый, дорогой и статусный сток",
          uk: "2. Для ОАЕ зазвичай потрібен чистіший, дорожчий і статусніший сток",
        },
        body: {
          en: "For UAE, buyers more often look at clean-title SUVs, premium German brands, Tesla, Lexus, and luxury performance models. Here the story is less about “the cheapest car” and more about value versus local premium-market pricing.",
          ru: "Для ОАЭ покупатели чаще смотрят в сторону clean-title SUV, немецких премиум-брендов, Tesla, Lexus и дорогих performance-моделей. Здесь история меньше про “самое дешёвое авто” и больше про разницу относительно локального premium-рынка.",
          uk: "Для ОАЕ покупці частіше дивляться у бік clean-title SUV, німецьких преміум-брендів, Tesla, Lexus і дорогих performance-моделей. Тут історія менше про “найдешевше авто” і більше про різницю відносно локального premium-ринку.",
        },
      },
      {
        title: {
          en: "3. Europe works best with practical, liquid, easy-to-document models",
          ru: "3. Для Европы лучше подходят практичные, ликвидные и понятные по документам модели",
          uk: "3. Для Європи краще підходять практичні, ліквідні та зрозумілі по документах моделі",
        },
        body: {
          en: "For Poland and the Baltics, practical wagons, compact SUVs, hybrids, and selected EVs usually make more sense than exotic cars. Pages built around these destination-specific selection principles improve relevance for Google and trust for buyers.",
          ru: "Для Польши и Прибалтики обычно лучше работают практичные универсалы, компактные SUV, гибриды и отдельные EV, а не экзотические модели. Страницы, построенные вокруг таких принципов подбора, одновременно усиливают и релевантность для Google, и доверие клиента.",
          uk: "Для Польщі та Балтії зазвичай краще працюють практичні універсали, компактні SUV, гібриди й окремі EV, а не екзотичні моделі. Сторінки, побудовані навколо таких принципів підбору, одночасно посилюють і релевантність для Google, і довіру клієнта.",
        },
      },
    ],
  },
];

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
