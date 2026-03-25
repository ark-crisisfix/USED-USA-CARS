import Link from "next/link";
import AuctionSourcesSection from "@/components/AuctionSourcesSection";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function AuctionListingsPage({ locale }: { locale: Locale }) {
  const isRu = locale === "ru";
  const L = (path: string) => localizePath(path, locale);

  const copy = isRu
    ? {
        eyebrow: "Площадки с лотами",
        title: "Где искать реальные лоты и как передать их нам на расчет",
        body:
          "Если хочешь участвовать в подборе сам, это лучший сценарий: открываешь аукционные площадки, находишь интересные варианты и отправляешь нам ссылку или номер лота. Мы проверяем историю, риски, ликвидность и считаем полную доставку.",
        stepsTitle: "Как это работает",
        steps: [
          {
            title: "Открой площадки и выбери несколько лотов",
            body: "Лучше присылать 2-4 варианта, чтобы мы могли сравнить не только цену, но и риски, пробег, повреждения и общую экономику.",
          },
          {
            title: "Отправь нам ссылку или номер лота",
            body: "Можно прислать URL, lot number, stock number или просто список моделей с бюджетом и направлением доставки.",
          },
          {
            title: "Мы даем нормальный расчет",
            body: "Проверяем историю, примерную ставку, стоимость логистики, таможню и финальную экономику по твоему направлению.",
          },
        ],
        trustTitle: "Что важно понимать",
        trustItems: [
          "Не каждый лот одинаково выгоден даже при низкой стартовой цене.",
          "Часть площадок имеет свои правила доступа, регистрации и формата торгов.",
          "Наша задача — не просто купить лот, а выбрать тот, который имеет смысл по итоговой стоимости.",
        ],
        ctaTitle: "Нашел интересный лот?",
        ctaBody:
          "Оставь заявку ниже и сразу добавь ссылку или номер лота. Мы вернемся с расчетом, оценкой рисков и рекомендацией, стоит ли вообще заходить в этот вариант.",
        aiNote: "AI-ассистент помогает нам быстрее разбирать lot-ссылки и shortlists, но финальная рекомендация и расчёт остаются за специалистом.",
        quickLinksTitle: "Также полезно",
        quickLinks: [
          { href: "/export-to-ukraine", label: "Доставка в Украину" },
          { href: "/export-to-uae", label: "Доставка в ОАЭ" },
          { href: "/calculator", label: "Калькулятор стоимости" },
        ],
        formTitle: "Пришлите ссылку или номер лота",
      }
    : {
        eyebrow: "Auction listing sites",
        title: "Where to browse real lots and send them to us for review",
        body:
          "If you want to participate in sourcing yourself, this is the best flow: open auction marketplaces, shortlist the vehicles you like, and send us the link or lot number. We review history, risk, resale logic, and the full landed cost.",
        stepsTitle: "How it works",
        steps: [
          {
            title: "Browse the marketplaces and shortlist a few lots",
            body: "Sending 2-4 options works best because we can compare not only price, but also damage, mileage, risk, and the final economics.",
          },
          {
            title: "Send us the lot link or lot number",
            body: "A URL, lot number, stock number, or even a shortlist of models with your budget and destination is enough to start.",
          },
          {
            title: "We come back with a practical estimate",
            body: "We review history, likely bidding range, shipping cost, customs exposure, and whether the deal makes sense for your target route.",
          },
        ],
        trustTitle: "What matters most",
        trustItems: [
          "A low starting price does not automatically mean a good buy.",
          "Some marketplaces have access, registration, or bidding restrictions depending on the lot and region.",
          "Our job is not just to buy a lot, but to identify the one that still makes sense after shipping and import costs.",
        ],
        ctaTitle: "Found an interesting lot?",
        ctaBody:
          "Leave a request below and include the link or lot number right away. We will come back with pricing, risk notes, and a recommendation on whether the lot is worth pursuing.",
        aiNote: "An AI assistant helps us process lot links and shortlists faster, while the final recommendation and estimate are still handled by a specialist.",
        quickLinksTitle: "You may also need",
        quickLinks: [
          { href: "/export-to-ukraine", label: "Delivery to Ukraine" },
          { href: "/export-to-uae", label: "Delivery to UAE" },
          { href: "/calculator", label: "Cost Calculator" },
        ],
        formTitle: "Send us a lot link or lot number",
      };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-8 py-12 text-white shadow-2xl sm:px-12">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">{copy.eyebrow}</div>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-5 text-lg leading-8 text-blue-50/90">{copy.body}</p>
          </div>
        </section>

        <AuctionSourcesSection locale={locale} />

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">{copy.stepsTitle}</h2>
            <div className="mt-8 space-y-6">
              {copy.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-black text-blue-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-1 text-base leading-7 text-slate-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">{copy.trustTitle}</h2>
            <ul className="mt-6 space-y-4">
              {copy.trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.5rem] bg-blue-50 p-6 ring-1 ring-blue-100">
              <h3 className="text-xl font-bold text-slate-950">{copy.quickLinksTitle}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {copy.quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={L(link.href)}
                    className="inline-flex items-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black text-slate-950">{copy.ctaTitle}</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{copy.ctaBody}</p>
          <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-7 text-blue-900">
            {copy.aiNote}
          </div>

          <div className="mt-8">
            <LeadFormUniversal
              heading={copy.formTitle}
              subtitle={copy.aiNote}
              formType="similar_car"
              sourceContext="auction_listings_page"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
