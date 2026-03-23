import LeadFormUniversal from "@/components/LeadFormUniversal";
import { shippingExamples, type ShippingExample } from "@/data/shipping-examples";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Country = "ukraine" | "uae";

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

export default function ExportLandingPage({ locale, country }: { locale: Locale; country: Country }) {
  return country === "ukraine" ? <ExportUkraine locale={locale} /> : <ExportUae locale={locale} />;
}
