import Link from "next/link";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { getAuctionPickSections } from "@/data/auction-picks";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function AuctionPicksPage({ locale }: { locale: Locale }) {
  const isRu = locale === "ru";
  const L = (path: string) => localizePath(path, locale);
  const sections = getAuctionPickSections(locale);

  const copy = isRu
    ? {
        eyebrow: "Витрина лотов",
        title: "Лучшие аукционные лоты недели",
        body:
          "Здесь мы собираем самые интересные, самые дешевые и самые перспективные аукционные лоты по направлениям, бюджету и типу автомобиля, чтобы посетителю было проще быстро увидеть сильные варианты.",
        boardTitle: "Как работает эта витрина",
        boardItems: [
          "Раз в неделю обновляем shortlist лучших лотов под Украину, ОАЭ, Польшу и Прибалтику.",
          "Показываем стартовую цену, ориентир по итоговой стоимости и короткое объяснение, почему лот интересен.",
          "Даём посетителю не сырой аукционный каталог, а уже подготовленную подборку с логикой и фильтрацией.",
        ],
        linksTitle: "Полезные переходы",
        links: [
          { href: "/auction-listings", label: "Где искать реальные лоты" },
          { href: "/calculator", label: "Калькулятор стоимости" },
          { href: "/export-to-ukraine", label: "Доставка в Украину" },
        ],
        sectionLabel: "Подборка",
        source: "Площадка",
        lot: "Лот",
        current: "Старт / текущая цена",
        target: "Итоговый ориентир",
        destination: "Направление",
        ctaTitle: "Хотите, чтобы мы собрали такой shortlist под ваш бюджет?",
        ctaBody:
          "Оставьте заявку и напишите, какие модели, бюджет и направление вас интересуют. Можно сразу прислать ссылку на лот, а можно просто описать задачу.",
        formTitle: "Запросить подборку лучших лотов",
      }
    : {
        eyebrow: "Auction Picks",
        title: "Best auction picks of the week",
        body:
          "This page highlights the most interesting, lowest-cost, and most attractive auction lots by destination, budget, and vehicle type, so visitors can see strong opportunities without digging through raw marketplace inventory.",
        boardTitle: "How this board works",
        boardItems: [
          "Refresh the shortlist every week for Ukraine, UAE, Poland, and Baltics routes.",
          "Show the opening price, an estimated landed total, and a short note on why the lot is interesting.",
          "Give visitors a curated shortlist instead of forcing them to dig through raw auction inventory.",
        ],
        linksTitle: "Useful next steps",
        links: [
          { href: "/auction-listings", label: "Where to browse real lots" },
          { href: "/calculator", label: "Cost Calculator" },
          { href: "/export-to-ukraine", label: "Delivery to Ukraine" },
        ],
        sectionLabel: "Section",
        source: "Source",
        lot: "Lot",
        current: "Opening / current price",
        target: "Target landed total",
        destination: "Route",
        ctaTitle: "Want us to build a shortlist like this for your budget?",
        ctaBody:
          "Leave a request and tell us which models, budget range, and destination interest you most. You can also include a lot link right away if you already have one.",
        formTitle: "Request a curated lot shortlist",
      };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 px-8 py-12 text-white shadow-2xl sm:px-12">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">{copy.eyebrow}</div>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-5 text-lg leading-8 text-emerald-50/90">{copy.body}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">{copy.boardTitle}</h2>
            <ul className="mt-6 space-y-4">
              {copy.boardItems.map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">{copy.linksTitle}</h2>
            <div className="mt-6 grid gap-3">
              {copy.links.map((link) => (
                <Link
                  key={link.href}
                  href={L(link.href)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 transition hover:bg-white hover:border-slate-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">{copy.sectionLabel}</div>
                <h2 className="mt-2 text-3xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{section.subtitle}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {section.picks.map((pick) => (
                  <article key={pick.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{pick.year}</div>
                        <h3 className="mt-2 text-2xl font-black text-slate-950">{pick.vehicle}</h3>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-900">
                        {pick.status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{copy.source}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{pick.source}</div>
                      </div>
                      <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{copy.lot}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{pick.lotNumber}</div>
                      </div>
                      <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{copy.current}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{pick.currentPrice}</div>
                      </div>
                      <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{copy.target}</div>
                        <div className="mt-1 text-sm font-semibold text-emerald-700">{pick.targetTotal}</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{copy.destination}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{pick.destination}</div>
                    </div>

                    <p className="mt-5 text-base leading-7 text-slate-600">{pick.note}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {pick.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black text-slate-950">{copy.ctaTitle}</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{copy.ctaBody}</p>

          <div className="mt-8">
            <LeadFormUniversal
              heading={copy.formTitle}
              subtitle={copy.ctaBody}
              formType="similar_car"
              sourceContext="auction_picks_page"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
