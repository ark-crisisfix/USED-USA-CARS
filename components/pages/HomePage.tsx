import Link from "next/link";
import CaseCard from "@/components/savings-cases/CaseCard";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import ReadyCarCard from "@/components/ready-cars/ReadyCarCard";
import { commerce } from "@/lib/commerceCopy";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { getFeaturedCasesForHome } from "@/lib/savings-cases";
import { getFeaturedReadyCarsForHome } from "@/lib/ready-cars";

export default function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const t = dictionary.home;
  const co = commerce(locale);
  const L = (path: string) => localizePath(path, locale);
  const hrefPrefix = locale === "ru" ? "/ru" : "";
  const featuredReady = getFeaturedReadyCarsForHome(6);
  const featuredCases = getFeaturedCasesForHome(3);
  const copy =
    locale === "ru"
      ? {
          eyebrow: "NorthAm Cars",
          heroBullets: [
            "Copart \u0438 IAAI \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0438\u0445 \u043f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a\u043e\u0432",
            "\u041f\u043e\u043d\u044f\u0442\u043d\u0430\u044f \u0441\u043c\u0435\u0442\u0430 \u0434\u043e \u0441\u0442\u0430\u0432\u043a\u0438 \u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",
            "\u0420\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u0432\u043e\u043d\u043e\u043a, WhatsApp \u0438 Telegram",
          ],
          lotTitle: "\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u043b\u043e\u0442?",
          lotBody:
            "\u041f\u0440\u0438\u0448\u043b\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u043b\u043e\u0442\u0430, \u0430 \u043c\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0438\u0441\u0442\u043e\u0440\u0438\u044e, \u0440\u0438\u0441\u043a\u0438 \u0438 \u043f\u043e\u043b\u043d\u0443\u044e \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0443 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438.",
          lotCta: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043b\u043e\u0442\u044b",
          trustEyebrow: "\u0414\u043e\u0432\u0435\u0440\u0438\u0435",
          trustTitle: "\u041a\u0430\u043a \u043c\u044b \u0443\u0431\u0438\u0440\u0430\u0435\u043c \u0445\u0430\u043e\u0441 \u0438\u0437 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0430\u0432\u0442\u043e",
          trustSubtitle:
            "\u041d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0443\u0436\u0435\u043d \u043e\u0434\u0438\u043d \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439: \u0432\u044b \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u043f\u0440\u0438\u0441\u044b\u043b\u0430\u0435\u0442\u0435 \u043b\u043e\u0442, \u0430 \u043c\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u0441 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u043c \u0438 \u043f\u043b\u0430\u043d\u043e\u043c.",
          trustItems: [
            {
              title: "\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u0441\u043c\u0435\u0442\u0430",
              body: "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0441\u0442\u0430\u0432\u043a\u0443, \u0430\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0431\u043e\u0440\u044b, inland transport, \u043c\u043e\u0440\u0435 \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f.",
            },
            {
              title: "\u0420\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u0435",
              body: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u0430\u0432\u0442\u043e \u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b, \u0430 \u043d\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0430\u044f \u0432\u0438\u0442\u0440\u0438\u043d\u0430 \u0431\u0435\u0437 \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430.",
            },
            {
              title: "\u041f\u0440\u044f\u043c\u043e\u0439 \u0441\u0432\u044f\u0437\u044c",
              body: "\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e, \u043a\u043b\u0438\u0435\u043d\u0442 \u0441\u0440\u0430\u0437\u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0432 \u0437\u0432\u043e\u043d\u043e\u043a, WhatsApp \u0438\u043b\u0438 Telegram \u0431\u0435\u0437 \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0443\u0436\u043d\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438.",
            },
          ],
          destinationTitle: "\u041a\u0443\u0434\u0430 \u043c\u044b \u0432\u0435\u0437\u0451\u043c \u0430\u0432\u0442\u043e",
          destinationCards: [
            {
              href: "/export-to-ukraine",
              title: "\u0423\u043a\u0440\u0430\u0438\u043d\u0430",
              body: "\u0411\u044e\u0434\u0436\u0435\u0442\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438, EV \u0438 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0435 SUV \u0441 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u043c.",
              cta: "\u0412 \u0423\u043a\u0440\u0430\u0438\u043d\u0443",
            },
            {
              href: "/export-to-uae",
              title: "\u041e\u0410\u042d",
              body: "Premium \u0438 luxury inventory \u0441 \u0444\u043e\u043a\u0443\u0441\u043e\u043c \u043d\u0430 clean-title \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u043e\u0439.",
              cta: "\u0412 \u041e\u0410\u042d",
            },
            {
              href: "/export-to-poland",
              title: "\u041f\u043e\u043b\u044c\u0448\u0430",
              body: "\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u0435\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0438 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439.",
              cta: "\u0412 \u041f\u043e\u043b\u044c\u0448\u0443",
            },
            {
              href: "/export-to-baltics",
              title: "\u041f\u0440\u0438\u0431\u0430\u043b\u0442\u0438\u043a\u0430",
              body: "\u0413\u0438\u0431\u043a\u0438\u0439 \u0432\u0445\u043e\u0434 \u0432 \u0415\u0421 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0445 \u043c\u0430\u0448\u0438\u043d, EV \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u0438.",
              cta: "\u0412 \u041f\u0440\u0438\u0431\u0430\u043b\u0442\u0438\u043a\u0443",
            },
          ],
          aiBullet: "AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u043b\u043e\u0442\u044b",
          aiBody:
            "\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u0440\u0430\u0437\u0431\u043e\u0440 \u0437\u0430\u044f\u0432\u043e\u043a, lot-\u0441\u0441\u044b\u043b\u043e\u043a \u0438 shortlist'\u043e\u0432, \u043d\u043e \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0437\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c.",
        }
      : {
          eyebrow: "NorthAm Cars",
          heroBullets: [
            "Copart and IAAI access without unnecessary middlemen",
            "Clear landed-cost logic before you bid",
            "Real support by phone, WhatsApp, and Telegram",
          ],
          lotTitle: "Already found a lot?",
          lotBody: "Send the lot link or lot number and we will review history, risk, and full delivery economics.",
          lotCta: "Browse Lots",
          trustEyebrow: "Trust",
          trustTitle: "How we make cross-border car buying feel simpler",
          trustSubtitle:
            "The site works better when it guides the visitor into one clear action: send a request or send a lot, then get a practical quote and sourcing plan back.",
          trustItems: [
            {
              title: "Transparent math",
              body: "We break down the bid, auction fees, inland transport, ocean freight, and destination-side costs before you commit.",
            },
            {
              title: "Real inventory",
              body: "You can review actual ready cars and real case studies instead of browsing placeholder content.",
            },
            {
              title: "Direct contact",
              body: "If needed, the user can move straight into a phone call, WhatsApp, or Telegram without hunting for the right entry point.",
            },
          ],
          destinationTitle: "Where we deliver",
          destinationCards: [
            {
              href: "/export-to-ukraine",
              title: "Ukraine",
              body: "Budget-friendly cars, EVs, and family SUVs with a clear landed-cost model.",
              cta: "To Ukraine",
            },
            {
              href: "/export-to-uae",
              title: "UAE",
              body: "Premium and luxury inventory with a focus on clean-title and practical logistics.",
              cta: "To UAE",
            },
            {
              href: "/export-to-poland",
              title: "Poland",
              body: "A practical route for European import and family-friendly inventory.",
              cta: "To Poland",
            },
            {
              href: "/export-to-baltics",
              title: "Baltics",
              body: "A flexible EU route for compact cars, EVs, and simple cross-border logistics.",
              cta: "To Baltics",
            },
          ],
          aiBullet: "AI assistant support for faster request and lot review",
          aiBody:
            "We use an AI assistant to speed up triage for incoming requests, lot links, and shortlists, while the final sourcing and client support stay with a human specialist.",
        };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.2),_transparent_32%),linear-gradient(135deg,_#0f172a_0%,_#1d4ed8_45%,_#1e3a8a_100%)] px-4 py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-xl text-blue-100 md:text-2xl">{t.heroSub}</p>

            <div className="mt-8 grid max-w-2xl gap-3">
              {copy.heroBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="text-sm text-slate-100 md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={L("/#contact")}
                className="rounded-xl bg-white px-8 py-4 text-center text-lg font-bold text-blue-900 shadow-lg transition hover:bg-gray-100"
              >
                {t.findMyCar}
              </Link>
              <Link
                href={L("/auction-listings")}
                className="rounded-xl bg-emerald-400 px-8 py-4 text-center text-lg font-bold text-slate-950 shadow-lg transition hover:bg-emerald-300"
              >
                {copy.lotCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/12 bg-slate-950/45 p-6 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-black text-white md:text-3xl">500+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-blue-100">{t.trustCars}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-black text-white md:text-3xl">20-40%</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-blue-100">{t.trustSave}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-black text-white md:text-3xl">4-10</div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-blue-100">{t.trustDelivery}</div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">{copy.lotTitle}</p>
              <p className="text-sm leading-7 text-slate-100">{copy.lotBody}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href={L("/auction-listings")}
                  className="rounded-xl bg-emerald-300 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-emerald-200"
                >
                  {copy.lotCta}
                </Link>
                <Link
                  href={L("/ready-cars")}
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {co.readyViewAll}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-b border-gray-200 px-4 py-12">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div className="p-6">
            <div className="mb-2 text-4xl font-black text-blue-600">500+</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustCars}</div>
            <p className="mt-2 text-gray-500">{t.trustCarsSub}</p>
          </div>
          <div className="p-6">
            <div className="mb-2 text-4xl font-black text-emerald-600">20-40%</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustSave}</div>
            <p className="mt-2 text-gray-500">{t.trustSaveSub}</p>
          </div>
          <div className="p-6">
            <div className="mb-2 text-4xl font-black text-amber-500">4-10</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustDelivery}</div>
            <p className="mt-2 text-gray-500">{t.trustDeliverySub}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{copy.trustEyebrow}</p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">{copy.trustTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">{copy.trustSubtitle}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {copy.trustItems.map((item, index) => (
              <div key={item.title} className="rounded-[26px] border border-gray-200 bg-gray-50 p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.22em] text-sky-700">0{index + 1}</span>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{co.readySectionTitle}</h2>
              <p className="mt-2 max-w-2xl text-gray-600">{co.readySectionSub}</p>
              <p className="mt-3 inline-block rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                {co.readyBadgeExample}
              </p>
            </div>
            <Link
              href={L("/ready-cars")}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
            >
              {co.readyViewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredReady.map((car) => (
              <ReadyCarCard key={car.id} car={car} hrefPrefix={hrefPrefix} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{co.realCasesTitle}</h2>
              <p className="mt-2 max-w-2xl text-gray-600">{co.realCasesSub}</p>
            </div>
            <Link href={L("/cases")} className="shrink-0 font-bold text-blue-600 hover:underline">
              {co.viewAllCases}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCases.map((cs) => (
              <CaseCard key={cs.id} c={cs} locale={locale} hrefPrefix={hrefPrefix} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{copy.destinationTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.destinationCards.map((card, index) => (
              <Link
                key={card.href}
                href={L(card.href)}
                className="group rounded-[28px] border border-gray-200 bg-gray-50 p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{card.body}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-blue-700 group-hover:text-blue-800">{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t.calcTitle}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">{t.calcSub}</p>
          <Link
            href={L("/calculator")}
            className="inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-lg transition hover:bg-gray-100"
          >
            {t.calcCta}
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 px-4 py-24">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t.leadTitle}</h2>
            <p className="mb-8 text-lg text-gray-600">{t.leadSub}</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-xl text-emerald-500">✓</span>
                {t.leadB1}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-xl text-emerald-500">✓</span>
                {t.leadB2}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-xl text-emerald-500">✓</span>
                {t.leadB3}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-3 text-xl text-emerald-500">✓</span>
                {copy.aiBullet}
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-7 text-blue-900">
              {copy.aiBody}
            </div>
          </div>
          <div>
            <LeadFormUniversal
              heading={t.leadFormTitle}
              subtitle={copy.aiBody}
              formType="general"
              sourceContext="homepage_contact"
              variant="landing"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
