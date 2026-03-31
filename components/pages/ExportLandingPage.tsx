import AuctionSourcesSection from "@/components/AuctionSourcesSection";
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

              <AuctionSourcesSection locale={locale} />
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
  const copy =
    locale === "ru"
      ? {
          eyebrow: "Авто из США в Украину под ключ",
          heroTitle: "Мечтаешь о машине из-за океана? Она может обойтись дешевле и быстрее, чем ты думаешь.",
          heroBody:
            "Подбираем ликвидные лоты с американских аукционов, просчитываем маршрут заранее и ведем сделку до выдачи автомобиля. Без хаоса, без догадок и с понятным бюджетом до старта.",
          bullets: [
            "Бюджетные электромобили, семейные SUV и практичные модели под рынок Украины",
            "Прозрачный расчет до ставки: покупка, доставка, таможня и сопровождение",
            "Сильный call to action: оставь заявку и получи вариант, который реально удивит по цене",
          ],
          primaryCta: "Оставить заявку",
          secondaryCta: "Смотреть примеры цен",
          formCardTitle: "Оставь заявку сейчас",
          formCardBody:
            "Мы вернемся к тебе с классным предложением, которое действительно сможет поразить по цене, маршруту и срокам. AI-ассистент помогает нам быстрее обработать заявку, ссылки на лоты и shortlist, а финальный подбор и сопровождение подтверждает специалист.",
          formButton: "Получить предложение",
          trustStats: [
            { value: "4 шага", label: "от подбора лота до выдачи" },
            { value: "До 24 ч", label: "на первый расчет и обратную связь" },
            { value: "Под ключ", label: "аукцион, логистика, документы и сопровождение" },
          ],
          promiseTitle: "Почему это предложение работает",
          promiseCards: [
            {
              title: "Экономика видна заранее",
              body: "До ставки показываем, где экономия возникает на покупке, логистике и конечной цене в Украине.",
            },
            {
              title: "Подбираем не красивую мечту, а выгодный лот",
              body: "Смотрим на реальные задачи: электромобиль на каждый день, доступный городской авто, семейный кроссовер или ликвидный проект под восстановление.",
            },
            {
              title: "Без потери контроля",
              body: "Ты понимаешь, что покупаем, сколько это стоит, как едет и когда выходить на следующий этап.",
            },
          ],
          midCtaTitle: "Оставь заявку, и мы соберем маршрут под твой бюджет",
          midCtaBody:
            "Если давно смотришь в сторону США, сейчас лучший момент запросить живой расчет и увидеть цифры без завышенных ожиданий.",
          objectionsTitle: "Что обычно волнует перед стартом",
          objections: [
            {
              title: "А вдруг это слишком дорого?",
              body: "Показываем структуру бюджета по шагам, чтобы было видно, где покупка из США реально выгоднее местного рынка.",
            },
            {
              title: "А если автомобиль после ремонта?",
              body: "Подбираем как clean-title варианты, так и repair-friendly лоты, если задача — зайти в более низкий бюджет.",
            },
            {
              title: "А если затянется доставка?",
              body: "Сразу объясняем маршрут, ожидания по срокам и какие этапы влияют на скорость прибытия в Украину.",
            },
          ],
          finalCtaTitle: "Оставь заявку. Мы вернемся к тебе с предложением, которое может по-настоящему поразить.",
          finalCtaBody:
            "Не откладывай идею еще на месяц. Напиши нам сейчас, и мы подберем сильный вариант из США под твой бюджет и задачи по Украине.",
          sideTitle: "Что ты получаешь",
          sideItems: [
            "Просчет до ставки и честный маршрут доставки",
            "Подбор под рынок Украины, а не случайные красивые лоты",
            "Сопровождение по документам, логистике и финальному получению",
            "Контакт напрямую: заявка, WhatsApp, Telegram и звонок",
          ],
          examplesTitle: "Примеры цен, от которых уже можно отталкиваться",
        }
      : {
          eyebrow: "Turnkey car delivery from the USA to Ukraine",
          heroTitle: "Dreaming about a car from overseas? It can cost less and arrive faster than you think.",
          heroBody:
            "We source practical lots from US auctions, calculate the route before bidding, and manage the deal all the way to delivery in Ukraine. Clear budget, clear process, no guesswork.",
          bullets: [
            "Affordable EVs, family SUVs, and practical cars selected for Ukraine",
            "Transparent numbers before bidding: purchase, shipping, customs, and support",
            "Strong call to action: leave a request and get an offer that may seriously surprise you",
          ],
          primaryCta: "Leave a Request",
          secondaryCta: "See Price Examples",
          formCardTitle: "Leave your request now",
          formCardBody:
            "We will get back to you with a strong offer that can genuinely surprise you on price, route, and timing. An AI assistant helps us process your request, lot links, and shortlist faster, while final sourcing and support are confirmed by a specialist.",
          formButton: "Get My Offer",
          trustStats: [
            { value: "4 steps", label: "from lot selection to final handover" },
            { value: "Within 24h", label: "for the first estimate and reply" },
            { value: "Turnkey", label: "auction, shipping, paperwork, and support" },
          ],
          promiseTitle: "Why this offer works",
          promiseCards: [
            {
              title: "The numbers are visible before the bid",
              body: "We break down where the savings come from, so you can compare the US route to your local market with real numbers.",
            },
            {
              title: "We source the right lot, not just a pretty listing",
              body: "Daily EVs, low-cost city cars, family crossovers, or repair-friendly projects if the goal is a lower entry budget.",
            },
            {
              title: "You stay in control",
              body: "You know what we buy, what it costs, how it ships, and when the next step happens.",
            },
          ],
          midCtaTitle: "Leave a request and we will build the route around your budget",
          midCtaBody:
            "If you have been considering the USA route for a while, this is the moment to request a real estimate and see the numbers clearly.",
          objectionsTitle: "What people usually worry about first",
          objections: [
            {
              title: "What if it becomes too expensive?",
              body: "We show the budget structure step by step, so you see exactly where the US route can beat local pricing.",
            },
            {
              title: "What about repaired vehicles?",
              body: "We can source clean-title cars or repair-friendly lots depending on whether your goal is safety, budget, or resale flexibility.",
            },
            {
              title: "What if delivery takes too long?",
              body: "We explain the route, timing expectations, and the milestones that affect delivery speed into Ukraine.",
            },
          ],
          finalCtaTitle: "Leave a request. We will come back with an offer that can genuinely impress you.",
          finalCtaBody:
            "Do not leave the idea for later again. Reach out now and we will build a strong US auction option around your budget and delivery goals for Ukraine.",
          sideTitle: "What you get",
          sideItems: [
            "A realistic estimate before the first bid",
            "Lots selected for Ukraine, not random eye-catching inventory",
            "Support with paperwork, logistics, and handover",
            "Direct access through form, WhatsApp, Telegram, and phone",
          ],
          examplesTitle: "Price examples you can already benchmark against",
        };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 font-sans md:py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white shadow-2xl">
          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-0">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                {copy.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/90 sm:text-xl">{copy.heroBody}</p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {copy.trustStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-blue-100/90">{item.label}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {copy.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-base leading-7 text-blue-50">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#ua-lead-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  {copy.primaryCta}
                </a>
                <a
                  href="#ua-price-examples"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  {copy.secondaryCta}
                </a>
              </div>
            </div>

            <div id="ua-lead-form" className="border-t border-white/10 bg-white p-5 text-slate-900 xl:border-l xl:border-t-0">
              <div className="rounded-[1.75rem] bg-slate-50 p-4 sm:p-6 shadow-xl ring-1 ring-slate-200">
                <div className="mb-6 rounded-2xl bg-blue-50 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                    CTA
                  </div>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{copy.formCardTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{copy.formCardBody}</p>
                </div>
                <LeadFormUniversal
                  heading={copy.formCardTitle}
                  subtitle={copy.formCardBody}
                  formType="shipping"
                  destinationPrefill="Ukraine"
                  sourceContext="export_ukraine_hero"
                  submitButtonText={copy.formButton}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {copy.promiseCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{card.body}</p>
            </article>
          ))}
        </section>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-black text-slate-950">{t.processTitle}</h2>
              <div className="mt-8 space-y-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-black text-blue-700">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">{s.title}</h3>
                      <p className="mt-1 text-base leading-7 text-slate-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-slate-950 px-7 py-8 text-white shadow-xl sm:px-9">
              <h2 className="text-3xl font-black">{copy.midCtaTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{copy.midCtaBody}</p>
              <div className="mt-6">
                <a
                  href="#ua-lead-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-emerald-300"
                >
                  {copy.formButton}
                </a>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-black text-slate-950">{t.costTitle}</h2>
              <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-6 space-y-4">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cAuction}</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cFees}</span>
                  <span className="font-semibold">$650</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cShip}</span>
                  <span className="font-semibold">$1,600</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cDuty}</span>
                  <span className="font-semibold">~$1,800</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cBroker}</span>
                  <span className="font-semibold">$800</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">{t.cService}</span>
                  <span className="font-semibold">Included</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-black text-emerald-700">
                  <span>{t.cTotal}</span>
                  <span>$9,350</span>
                </div>
                <p className="text-xs text-slate-500">{t.cNote}</p>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-3xl font-black text-slate-950">{copy.objectionsTitle}</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {copy.objections.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-200">
                    <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ua-price-examples" className="space-y-4">
              <div className="px-1">
                <h2 className="text-3xl font-black text-slate-950">{copy.examplesTitle}</h2>
              </div>
              <ShippingExamplesSection locale={locale} market="ukraine" accent="blue" />
            </section>

            <AuctionSourcesSection locale={locale} />

            <section className="rounded-[2rem] bg-gradient-to-br from-blue-900 to-slate-950 px-7 py-10 text-white shadow-2xl sm:px-10">
              <h2 className="max-w-4xl text-3xl font-black sm:text-4xl">{copy.finalCtaTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">{copy.finalCtaBody}</p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#ua-lead-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  {copy.primaryCta}
                </a>
                <a
                  href="https://wa.me/380992557209"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  WhatsApp
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-6 xl:pt-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[1.75rem] bg-blue-900 p-6 text-white shadow-xl">
                <h3 className="text-2xl font-black">{copy.sideTitle}</h3>
                <ul className="mt-5 space-y-3">
                  {copy.sideItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-blue-50">
                      <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <LeadFormUniversal
                heading={copy.formCardTitle}
                subtitle={copy.formCardBody}
                formType="shipping"
                destinationPrefill="Ukraine"
                sourceContext="export_ukraine_sidebar"
                submitButtonText={copy.formButton}
              />
            </div>
          </aside>
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
  const uaeDutyText =
    locale === "ru"
      ? "Таможенная пошлина в ОАЭ обычно начинается от 5%. Дополнительно может применяться НДС (5%) и местные требования к оформлению в зависимости от статуса покупателя и структуры сделки."
      : "Customs duty in the UAE typically starts at 5%. Additional VAT (5%) and local compliance requirements may apply depending on the buyer’s status and transaction structure.";
  const sideItems = [t.side1, t.side2, uaeDutyText, t.side4];

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

              <AuctionSourcesSection locale={locale} />
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
