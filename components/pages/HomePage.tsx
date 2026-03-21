import Link from "next/link";
import CaseCard from "@/components/savings-cases/CaseCard";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import ReadyCarCard from "@/components/ready-cars/ReadyCarCard";
import cars from "@/data/cars.json";
import { commerce } from "@/lib/commerceCopy";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { getFeaturedCasesForHome } from "@/lib/savings-cases";
import { getFeaturedReadyCarsForHome } from "@/lib/ready-cars";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  const c = getDictionary(locale).common;
  const co = commerce(locale);
  const L = (path: string) => localizePath(path, locale);
  const hrefPrefix = locale === "ru" ? "/ru" : "";
  const featuredReady = getFeaturedReadyCarsForHome(6);
  const featuredCases = getFeaturedCasesForHome(3);
  const heroPanel = locale === "ru"
    ? {
        eyebrow: "NorthAm Cars",
        bullets: ["Copart и IAAI без посредников", "Понятная структура расходов до ставки", "Прямой контакт: звонок, WhatsApp, Telegram"],
        stats: [
          { value: "500+", label: "подобранных авто" },
          { value: "20–40%", label: "типичная экономия" },
          { value: "4–10", label: "недель логистики" },
        ],
        links: {
          contact: "Быстрый контакт",
          cases: "Реальные кейсы",
          ready: "Готовые авто",
        },
      }
    : {
        eyebrow: "NorthAm Cars",
        bullets: ["Copart and IAAI access without middlemen", "Clear cost structure before you bid", "Direct contact by phone, WhatsApp, and Telegram"],
        stats: [
          { value: "500+", label: "cars sourced" },
          { value: "20–40%", label: "typical savings" },
          { value: "4–10", label: "weeks logistics" },
        ],
        links: {
          contact: "Fast Contact",
          cases: "Real Cases",
          ready: "Ready Cars",
        },
      };
  const trustProof = locale === "ru"
    ? {
        title: "Почему процессу доверяют",
        subtitle:
          "Вместо шаблонных отзывов мы показываем сигналы доверия, важные до ставки и покупки.",
        note: "Реальные отзывы клиентов можно будет добавить позже, по мере сбора и проверки.",
        eyebrow: "Доверие",
        badges: ["Без фейковых отзывов", "Открытые кейсы", "Прямой контакт"],
        links: {
          cases: "Смотреть кейсы",
          ready: "Авто в наличии",
          contact: "Связаться сейчас",
        },
        items: [
          {
            stat: "01",
            title: "Понятная структура расходов",
            body: "До решения раскладываем стоимость: ставка, сборы аукциона, перевозка по США, море и расходы на стороне назначения.",
          },
          {
            stat: "02",
            title: "Открытые кейсы и наличие",
            body: "Можно посмотреть авто в наличии, кейсы закупки и страницы по направлениям, а не опираться только на обещания.",
          },
          {
            stat: "03",
            title: "Прямой контакт без ожидания",
            body: "На сайте сразу доступны WhatsApp, Telegram, звонок и email-шаблон заказа, чтобы быстро перейти к живому общению.",
          },
        ],
      }
    : {
        title: "Why Clients Trust The Process",
        subtitle:
          "Instead of placeholder testimonials, we show the trust signals that matter before you place a bid.",
        note: "Real customer reviews can be added later as they are collected and verified.",
        eyebrow: "Trust",
        badges: ["No fake reviews", "Open cases", "Direct contact"],
        links: {
          cases: "View Cases",
          ready: "Ready Cars",
          contact: "Contact Now",
        },
        items: [
          {
            stat: "01",
            title: "Clear Cost Logic",
            body: "We break down auction price, fees, inland transport, ocean freight, and destination-side costs before you commit.",
          },
          {
            stat: "02",
            title: "Visible Inventory And Cases",
            body: "You can review ready cars, purchase cases, and destination pages instead of relying on generic promises.",
          },
          {
            stat: "03",
            title: "Direct Communication",
            body: "WhatsApp, Telegram, phone, and order email are available directly on the site, so you can reach a person without waiting.",
          },
        ],
      };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.2),_transparent_32%),linear-gradient(135deg,_#0f172a_0%,_#1d4ed8_45%,_#1e3a8a_100%)] text-white py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              {heroPanel.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">{t.heroSub}</p>

            <div className="mt-8 grid gap-3 max-w-2xl">
              {heroPanel.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="text-sm md:text-base text-slate-100">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={L("/#contact")}
                className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg text-center"
              >
                {t.findMyCar}
              </Link>
              <Link
                href={L("/catalog")}
                className="bg-blue-700/80 backdrop-blur border border-blue-300/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition shadow-lg text-lg text-center"
              >
                {t.browseCars}
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/12 bg-slate-950/45 backdrop-blur-md p-6 shadow-2xl">
            <div className="grid grid-cols-3 gap-3">
              {heroPanel.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200 mb-3">Quick Paths</p>
              <div className="grid gap-3">
                <Link href={L("/ready-cars")} className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/8 transition">
                  {heroPanel.links.ready}
                </Link>
                <Link href={L("/cases")} className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/8 transition">
                  {heroPanel.links.cases}
                </Link>
                <Link href={L("/#contact")} className="rounded-xl border border-sky-300/25 bg-sky-400/10 px-4 py-3 text-sm font-semibold text-sky-100 hover:bg-sky-400/20 transition">
                  {heroPanel.links.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustCars}</div>
            <p className="text-gray-500 mt-2">{t.trustCarsSub}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-emerald-600 mb-2">20–40%</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustSave}</div>
            <p className="text-gray-500 mt-2">{t.trustSaveSub}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-amber-500 mb-2">4–10</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustDelivery}</div>
            <p className="text-gray-500 mt-2">{t.trustDeliverySub}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.valueTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                🏛️
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v1t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v1b}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center text-emerald-600 text-2xl mb-6">
                💎
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v2t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v2b}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center text-amber-600 text-2xl mb-6">
                🚢
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v3t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v3b}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300 mb-4">{trustProof.eyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">{trustProof.title}</h2>
              <p className="mt-5 text-slate-300 text-lg leading-8">{trustProof.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {trustProof.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-sky-800/80 bg-sky-900/30 px-4 py-2 text-sm font-medium text-sky-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href={L("/cases")}
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-5 text-center hover:border-sky-700 hover:bg-slate-800 transition"
                >
                  <div className="text-2xl font-black text-sky-300">{featuredCases.length}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">{trustProof.links.cases}</div>
                </Link>
                <Link
                  href={L("/ready-cars")}
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-5 text-center hover:border-emerald-700 hover:bg-slate-800 transition"
                >
                  <div className="text-2xl font-black text-emerald-300">{featuredReady.length}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">{trustProof.links.ready}</div>
                </Link>
                <Link
                  href={L("/#contact")}
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-5 text-center hover:border-amber-700 hover:bg-slate-800 transition"
                >
                  <div className="text-2xl font-black text-amber-300">24/7</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">{trustProof.links.contact}</div>
                </Link>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm leading-7 text-slate-300">
                {trustProof.note}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {trustProof.items.map((item) => (
              <div key={item.title} className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-7 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.22em] text-sky-300">{item.stat}</span>
                  <span className="h-px flex-1 bg-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{co.readySectionTitle}</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">{co.readySectionSub}</p>
              <p className="text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mt-3 inline-block">{co.readyBadgeExample}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={L("/ready-cars")}
                className="text-center text-sm font-bold px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                {co.readyViewAll}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReady.map((car) => (
              <ReadyCarCard key={car.id} car={car} hrefPrefix={hrefPrefix} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">{t.featuredTitle}</h2>
              <p className="text-gray-600 mt-2">{t.featuredSub}</p>
            </div>
            <Link href={L("/catalog")} className="hidden sm:inline-block text-blue-600 font-semibold hover:underline">
              {c.viewAllCars}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.lot_id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">
                    {car.year} • {car.mileage} {c.mi}
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {car.make} {car.model}
                  </h3>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{c.damage}</span>
                      <span className="font-medium">{car.damage}</span>
                    </div>
                    <div className="flex justify-between text-blue-700 font-semibold">
                      <span>{c.auctionPrice}</span>
                      <span>${car.auction_price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 font-bold border-t pt-2 mt-2">
                      <span>{c.estimatedTotal}</span>
                      <span>${car.estimated_total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link
                    href={L(`/car/${car.lot_id}`)}
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition"
                  >
                    {c.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href={L("/catalog")} className="text-blue-600 font-semibold hover:underline">
              {c.viewAllCars}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{co.realCasesTitle}</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">{co.realCasesSub}</p>
            </div>
            <Link href={L("/cases")} className="text-blue-600 font-bold hover:underline shrink-0">
              {co.viewAllCases}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((cs) => (
              <CaseCard key={cs.id} c={cs} locale={locale} hrefPrefix={hrefPrefix} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t.destTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href={L("/export-to-ukraine")}
              className="group relative rounded-2xl overflow-hidden block h-80 bg-blue-900 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/800x600/1e3a8a/white?text=Odessa+Port"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">{t.uaTitle}</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">{t.uaSub}</p>
                <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-blue-500 transition">
                  {t.uaCta}
                </span>
              </div>
            </Link>
            <Link
              href={L("/export-to-uae")}
              className="group relative rounded-2xl overflow-hidden block h-80 bg-amber-900 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/800x600/78350f/white?text=Dubai+Skyline"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">{t.uaeTitle}</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">{t.uaeSub}</p>
                <span className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-amber-500 transition">
                  {t.uaCta}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.calcTitle}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{t.calcSub}</p>
          <Link
            href={L("/calculator")}
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg"
          >
            {t.calcCta}
          </Link>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.leadTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.leadSub}</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB1}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB2}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB3}
              </li>
            </ul>
          </div>
          <div>
            <LeadFormUniversal heading={t.leadFormTitle} formType="general" sourceContext="homepage_contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
