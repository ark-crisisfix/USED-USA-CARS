import LeadFormUniversal from "@/components/LeadFormUniversal";
import { shippingExamples, type ShippingExample } from "@/data/shipping-examples";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Country = "ukraine" | "uae";
type ExtendedCountry = Country | "poland" | "baltics";

function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function ShippingExamplesSection({
  locale,
  market,
  accent,
}: {
  locale: Locale;
  market: Country;
  accent: "blue" | "amber";
}) {
  const examples = shippingExamples[market];
  const isRu = locale === "ru";
  const heading =
    locale === "ru"
      ? "Примеры аукционных автомобилей по этому направлению"
      : "Auction vehicle examples for this route";
  const subheading =
    locale === "ru"
      ? "Ниже приведены публичные рыночные примеры из истории аукционов. Стартовая цена взята из лота, а конечная цена является ориентировочной итоговой стоимостью для этого направления."
      : "Below are public market examples from auction history. The initial price comes from the lot record, while the final price is an estimated landed total for this destination.";
  const sourceLabel = locale === "ru" ? "Источник" : "Source";
  const auctionLabel = locale === "ru" ? "Стартовая цена" : "Initial price";
  const finalLabel = locale === "ru" ? "Конечная цена" : "Final price";
  const dateLabel = locale === "ru" ? "Дата лота" : "Lot date";
  const mileageLabel = locale === "ru" ? "Пробег" : "Mileage";
  const damageLabel = locale === "ru" ? "Повреждение" : "Damage";
  const cardTone =
    accent === "blue"
      ? "border-blue-100 bg-blue-50/40"
      : "border-amber-100 bg-amber-50/50";
  const pillTone =
    accent === "blue"
      ? "bg-blue-100 text-blue-800"
      : "bg-amber-100 text-amber-900";

  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="max-w-3xl mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
        <p className="text-gray-600 mt-3">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {examples.map((example) => (
          <ShippingExampleCard
            key={example.id}
            example={example}
            locale={locale}
            cardTone={cardTone}
            pillTone={pillTone}
            labels={{
              sourceLabel,
              auctionLabel,
              finalLabel,
              dateLabel,
              mileageLabel,
              damageLabel,
            }}
            isRu={isRu}
          />
        ))}
      </div>
    </section>
  );
}

function ExportGenericRoute({
  locale,
  content,
  accent,
  destinationPrefill,
  sourceContext,
}: {
  locale: Locale;
  content: {
    h1: string;
    sub: string;
    processTitle: string;
    steps: { title: string; body: string }[];
    infoTitle: string;
    cards: { icon: string; title: string; body: string }[];
    sideTitle: string;
    sideItems: string[];
    formTitle: string;
  };
  accent: "blue" | "amber";
  destinationPrefill: "Ukraine" | "UAE" | "Other";
  sourceContext: string;
}) {
  const stepTone =
    accent === "blue"
      ? "bg-blue-100 text-blue-600"
      : "bg-amber-100 text-amber-700";
  const sideTone =
    accent === "blue"
      ? "bg-blue-900 text-white"
      : "bg-gray-900 text-white";
  const sideIconTone = accent === "blue" ? "" : "text-amber-500";
  const cardTone =
    accent === "blue"
      ? "bg-blue-50 text-blue-900"
      : "bg-amber-50 text-amber-900";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{content.h1}</h1>
          <p className="text-xl text-gray-600">{content.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">{content.processTitle}</h2>
              <div className="space-y-6">
                {content.steps.map((s, i) => (
                  <div key={i} className="flex">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 ${stepTone}`}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="text-gray-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{content.infoTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {content.cards.map((card, i) => (
                  <div key={i} className={`rounded-xl p-6 ${cardTone}`}>
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className={`p-6 rounded-2xl shadow-lg mb-8 ${sideTone}`}>
                <h3 className="text-xl font-bold mb-4">{content.sideTitle}</h3>
                <ul className="space-y-3">
                  {content.sideItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 ${sideIconTone}`}>{accent === "blue" ? "✓" : "★"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LeadFormUniversal
                heading={content.formTitle}
                formType="shipping"
                destinationPrefill={destinationPrefill}
                sourceContext={sourceContext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShippingExampleCard({
  example,
  locale,
  cardTone,
  pillTone,
  labels,
  isRu,
}: {
  example: ShippingExample;
  locale: Locale;
  cardTone: string;
  pillTone: string;
  labels: {
    sourceLabel: string;
    auctionLabel: string;
    finalLabel: string;
    dateLabel: string;
    mileageLabel: string;
    damageLabel: string;
  };
  isRu: boolean;
}) {
  return (
    <article className={`rounded-2xl border p-6 ${cardTone}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-bold text-gray-900">{example.vehicle}</h3>
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${pillTone}`}>
          {locale === "ru" ? "Публичный лот" : "Public lot"}
        </span>
      </div>

      <p className="text-sm text-gray-700 leading-6 mb-5">
        {isRu ? example.descriptionRu : example.descriptionEn}
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 gap-4">
          <span className="text-gray-600">{labels.auctionLabel}</span>
          <span className="font-semibold text-gray-900">{formatUsd(example.auctionPriceUsd)}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 gap-4">
          <span className="text-gray-600">{labels.finalLabel}</span>
          <span className="font-semibold text-emerald-700">{formatUsd(example.finalPriceUsd)}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 gap-4">
          <span className="text-gray-600">{labels.dateLabel}</span>
          <span className="font-medium text-gray-900">{example.lotDate}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 gap-4">
          <span className="text-gray-600">{labels.mileageLabel}</span>
          <span className="font-medium text-gray-900">{example.mileage}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-600">{labels.damageLabel}</span>
          <span className="font-medium text-gray-900 text-right">{example.damage}</span>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-gray-200">
        <a
          href={example.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          {labels.sourceLabel}: {example.sourceLabel}
        </a>
      </div>
    </article>
  );
}

function ExportUkraine({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).exportUkraine;
  const steps = [
    { title: t.s1t, body: t.s1b },
    { title: t.s2t, body: t.s2b },
    { title: t.s3t, body: t.s3b },
    { title: t.s4t, body: t.s4b },
  ];
  const sideItems = [t.side1, t.side2, t.side3, t.side4];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t.h1}</h1>
          <p className="text-xl text-gray-600">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">{t.processTitle}</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="text-gray-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.costTitle}</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cAuction}</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cFees}</span>
                  <span className="font-semibold">$650</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cShip}</span>
                  <span className="font-semibold">$1,600</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cDuty}</span>
                  <span className="font-semibold">~$1,800</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cBroker}</span>
                  <span className="font-semibold">$300</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cService}</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between text-lg pt-2 text-emerald-700 font-bold">
                  <span>{t.cTotal}</span>
                  <span>$9,350</span>
                </div>
                <p className="text-xs text-gray-500 mt-4">{t.cNote}</p>
              </div>
            </section>

            <ShippingExamplesSection locale={locale} market="ukraine" accent="blue" />
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">{t.sideTitle}</h3>
                <ul className="space-y-3">
                  {sideItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LeadFormUniversal
                heading={t.formTitle}
                formType="shipping"
                destinationPrefill="Ukraine"
                sourceContext="export_ukraine_sidebar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportUae({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).exportUae;
  const steps = [
    { title: t.s1t, body: t.s1b },
    { title: t.s2t, body: t.s2b },
    { title: t.s3t, body: t.s3b },
    { title: t.s4t, body: t.s4b },
  ];
  const sideItems = [t.side1, t.side2, t.side3, t.side4];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t.h1}</h1>
          <p className="text-xl text-gray-600">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">{t.processTitle}</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="text-gray-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.whyTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{t.why1t}</h3>
                  <p className="text-amber-800">{t.why1b}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🚢</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{t.why2t}</h3>
                  <p className="text-amber-800">{t.why2b}</p>
                </div>
              </div>
            </section>

            <ShippingExamplesSection locale={locale} market="uae" accent="amber" />
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">{t.sideTitle}</h3>
                <ul className="space-y-3">
                  {sideItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-amber-500">★</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LeadFormUniversal
                heading={t.formTitle}
                formType="shipping"
                destinationPrefill="UAE"
                sourceContext="export_uae_sidebar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExportLandingPage({ locale, country }: { locale: Locale; country: ExtendedCountry }) {
  const polandContent =
    locale === "ru"
      ? {
          h1: "Экспорт авто из США в Польшу",
          sub: "Подбор ликвидных автомобилей с аукционов США с понятной логистикой через европейские порты и дальнейшей доставкой в Польшу.",
          processTitle: "Как это работает",
          steps: [
            {
              title: "Подбор под рынок Польши",
              body: "Подбираем автомобили, которые хорошо подходят под польский рынок: семейные модели, экономичные бензиновые версии, гибриды и ликвидные SUV.",
            },
            {
              title: "Покупка на аукционе",
              body: "Проверяем историю, состояние и продаваемость, после чего выкупаем лот от вашего имени через Copart или IAAI.",
            },
            {
              title: "Доставка в Европу",
              body: "Организуем наземную доставку по США, морской фрахт до Европы и дальнейшую логистику до Польши.",
            },
            {
              title: "Документы и передача",
              body: "Помогаем с экспортным комплектом документов и координируем передачу автомобиля после прибытия.",
            },
          ],
          infoTitle: "Почему Польша выглядит перспективно",
          cards: [
            {
              icon: "🚗",
              title: "Сильный спрос на массовые модели",
              body: "Хорошо работают ликвидные седаны, универсалы, компактные SUV и практичные гибриды с понятной экономикой.",
            },
            {
              icon: "⚓",
              title: "Удобная европейская логистика",
              body: "Маршрут через европейские порты делает процесс понятным и масштабируемым для дальнейшего роста направления.",
            },
          ],
          sideTitle: "Что важно для маршрута в Польшу",
          sideItems: [
            "Фокус на ликвидных моделях",
            "Удобная доставка через ЕС",
            "Подбор под местный спрос",
            "Поддержка по экспортному комплекту",
          ],
          formTitle: "Запросить расчёт для Польши",
        }
      : {
          h1: "Export Cars from USA to Poland",
          sub: "We source auction vehicles from the USA and build a practical delivery route into Poland through established European port logistics.",
          processTitle: "How The Process Works",
          steps: [
            {
              title: "Poland-focused selection",
              body: "We focus on cars that fit Polish demand: practical family vehicles, efficient petrol cars, hybrids, and liquid SUVs.",
            },
            {
              title: "Auction buying",
              body: "We review history, condition, and resale logic before bidding on Copart or IAAI on your behalf.",
            },
            {
              title: "Shipping into Europe",
              body: "We arrange inland US transport, ocean freight to Europe, and follow-up logistics into Poland.",
            },
            {
              title: "Documents and handover",
              body: "We help assemble the export paperwork set and coordinate the handover after arrival.",
            },
          ],
          infoTitle: "Why Poland is a strong next route",
          cards: [
            {
              icon: "🚗",
              title: "Solid demand for mainstream cars",
              body: "Sedans, wagons, compact SUVs, and practical hybrids are easier to position for this destination.",
            },
            {
              icon: "⚓",
              title: "Clear European logistics chain",
              body: "A Europe-first route keeps the process understandable and scalable as this direction grows.",
            },
          ],
          sideTitle: "What matters for Poland deliveries",
          sideItems: [
            "Focus on liquid models",
            "EU-friendly logistics chain",
            "Selection based on local demand",
            "Support with export paperwork",
          ],
          formTitle: "Get a Quote for Poland",
        };

  const balticsContent =
    locale === "ru"
      ? {
          h1: "Экспорт авто из США в Прибалтику",
          sub: "Поставка автомобилей из США в Литву, Латвию и Эстонию через понятные балтийские и европейские логистические коридоры.",
          processTitle: "Как это работает",
          steps: [
            {
              title: "Подбор под рынок Балтии",
              body: "Подбираем автомобили с понятной ликвидностью для Литвы, Латвии и Эстонии: универсалы, кроссоверы, гибриды и EV.",
            },
            {
              title: "Покупка и проверка",
              body: "Проверяем историю, тип повреждений и итоговую экономику до ставки на аукционе.",
            },
            {
              title: "Доставка в балтийский регион",
              body: "Строим маршрут через европейские и балтийские порты с дальнейшей доставкой в конечную страну.",
            },
            {
              title: "Подготовка к передаче",
              body: "Координируем документы, логистику после прибытия и финальную передачу автомобиля клиенту.",
            },
          ],
          infoTitle: "Почему Прибалтика интересна",
          cards: [
            {
              icon: "🌍",
              title: "Гибкий региональный спрос",
              body: "Балтийский рынок подходит для практичных европейских форматов кузова, а также для гибридов и электричек.",
            },
            {
              icon: "📦",
              title: "Удобно масштабировать направление",
              body: "Один экспортный блок можно развивать сразу под Литву, Латвию и Эстонию без отдельной сложной архитектуры сайта.",
            },
          ],
          sideTitle: "Что важно для Балтийского маршрута",
          sideItems: [
            "Фокус на универсалах, SUV и EV",
            "Маршруты через европейские порты",
            "Подходит для нескольких рынков сразу",
            "Удобный формат для дальнейшего роста",
          ],
          formTitle: "Запросить расчёт для Прибалтики",
        }
      : {
          h1: "Export Cars from USA to the Baltics",
          sub: "Vehicle sourcing from US auctions with delivery routes into Lithuania, Latvia, and Estonia through practical Baltic and European logistics corridors.",
          processTitle: "How The Process Works",
          steps: [
            {
              title: "Baltics-focused selection",
              body: "We target vehicles that fit Baltic demand: wagons, crossovers, hybrids, and EVs with practical resale logic.",
            },
            {
              title: "Auction purchase and verification",
              body: "We check history, damage profile, and delivered economics before we place the bid.",
            },
            {
              title: "Shipping into the Baltic region",
              body: "We build the route through European and Baltic ports and coordinate the final leg into the destination country.",
            },
            {
              title: "Final handover planning",
              body: "We help coordinate documents, arrival logistics, and the final vehicle release to the client.",
            },
          ],
          infoTitle: "Why the Baltics are worth adding",
          cards: [
            {
              icon: "🌍",
              title: "Flexible regional demand",
              body: "The Baltic market is a good fit for practical European body styles plus hybrids and EVs.",
            },
            {
              icon: "📦",
              title: "Easy route to scale",
              body: "One export direction can cover Lithuania, Latvia, and Estonia without overcomplicating the site structure.",
            },
          ],
          sideTitle: "What matters for the Baltics route",
          sideItems: [
            "Good fit for wagons, SUVs, and EVs",
            "European and Baltic port routing",
            "One direction for multiple markets",
            "Clean structure for future growth",
          ],
          formTitle: "Get a Quote for the Baltics",
        };

  if (country === "ukraine") return <ExportUkraine locale={locale} />;
  if (country === "uae") return <ExportUae locale={locale} />;
  if (country === "poland") {
    return (
      <ExportGenericRoute
        locale={locale}
        content={polandContent}
        accent="blue"
        destinationPrefill="Other"
        sourceContext="export_poland_sidebar"
      />
    );
  }

  return (
    <ExportGenericRoute
      locale={locale}
      content={balticsContent}
      accent="blue"
      destinationPrefill="Other"
      sourceContext="export_baltics_sidebar"
    />
  );
}
