import Link from "next/link";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function PartsShippingPage({ locale }: { locale: Locale }) {
  const L = (path: string) => localizePath(path, locale);
  const isRu = locale === "ru";

  const copy = isRu
    ? {
        eyebrow: "Подбор и доставка запчастей",
        title: "Нужны запчасти для американского автомобиля? Подберём, проверим и отправим.",
        subtitle:
          "Помогаем найти оригинальные, контрактные и б/у запчасти для автомобилей из США и Канады. Особенно удобно, если машина уже куплена на аукционе или вы восстанавливаете американский автомобиль под свой рынок.",
        bullets: [
          "Подбор по VIN, номеру детали или фото",
          "Фокус на американские марки и модели из США",
          "Отправка отдельно или вместе с автомобилем",
        ],
        cards: [
          {
            title: "Что можно заказать",
            body: "Оптика, бамперы, двери, зеркала, элементы салона, блоки управления, подвеску, двигатель, коробку передач и другие позиции под конкретный проект.",
          },
          {
            title: "Как мы работаем",
            body: "Вы присылаете VIN, ссылку на лот, список деталей или фото. Мы уточняем совместимость, ищем рабочие варианты и возвращаемся с предложением по цене и логистике.",
          },
          {
            title: "Как отправляем",
            body: "Можем отправить запчасти отдельно, собрать несколько позиций в одну партию или положить их в контейнер с автомобилем, если вы везёте машину через нас.",
          },
        ],
        includedTitle: "Что лучше прислать для быстрого подбора",
        includedItems: [
          "VIN автомобиля",
          "список деталей или номер детали",
          "ссылку на лот / автомобиль",
          "фото повреждений или нужных узлов",
        ],
        ctaTitle: "Оставьте заявку на подбор запчастей",
        ctaBody:
          "Напишите, для какой машины нужны детали, и мы вернёмся с практичным предложением по наличию, цене и отправке.",
        primaryCta: "Оставить заявку",
        secondaryCta: "Смотреть лоты",
        directCta: "Связаться с нами",
        formHeading: "Запрос на подбор и отправку запчастей",
      }
    : {
        eyebrow: "Parts sourcing and shipping",
        title: "Need parts for an American vehicle? We can source, verify, and ship them.",
        subtitle:
          "We help clients source OEM, used, and donor parts for vehicles from the US and Canada. This is especially useful if your car already came from an auction or you are rebuilding a US-market vehicle for your destination market.",
        bullets: [
          "Sourcing by VIN, part number, or photos",
          "Strong fit for US makes and models",
          "Ship separately or together with the vehicle",
        ],
        cards: [
          {
            title: "What we can source",
            body: "Lights, bumpers, doors, mirrors, interior trim, control modules, suspension parts, engines, transmissions, and other project-specific items.",
          },
          {
            title: "How it works",
            body: "Send us the VIN, lot link, parts list, or photos. We check compatibility, shortlist practical options, and come back with pricing and shipping logic.",
          },
          {
            title: "How we ship",
            body: "We can ship parts separately, consolidate several items into one package, or load them into the same container as the vehicle if you are importing a car through us.",
          },
        ],
        includedTitle: "What to send for a fast quote",
        includedItems: [
          "vehicle VIN",
          "part list or part number",
          "lot URL / vehicle link",
          "photos of damage or required components",
        ],
        ctaTitle: "Leave a parts request",
        ctaBody:
          "Tell us what vehicle and parts you need, and we will come back with a practical offer on availability, pricing, and shipping.",
        primaryCta: "Request parts sourcing",
        secondaryCta: "Browse auction lots",
        directCta: "Contact us directly",
        formHeading: "Parts sourcing and shipping request",
      };

  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),linear-gradient(135deg,_#0f172a_0%,_#1d4ed8_48%,_#0f766e_100%)] px-4 py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-blue-100">{copy.subtitle}</p>

            <div className="mt-8 grid max-w-2xl gap-3">
              {copy.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="text-sm text-slate-100 md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#parts-form"
                className="rounded-xl bg-white px-8 py-4 text-center text-lg font-bold text-blue-900 shadow-lg transition hover:bg-gray-100"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href={L("/auction-listings")}
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-white/15"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/12 bg-slate-950/45 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">{copy.includedTitle}</p>
            <div className="mt-5 grid gap-4">
              {copy.includedItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-300/15 text-sm font-black text-emerald-200">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {copy.cards.map((card) => (
            <article key={card.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950">{copy.ctaTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{copy.ctaBody}</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#parts-form"
              className="rounded-xl bg-slate-900 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-slate-800"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={L("/contact")}
              className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-bold text-slate-900 transition hover:bg-slate-50"
            >
              {copy.directCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="parts-form" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <LeadFormUniversal
            heading={copy.formHeading}
            formType="general"
            sourceContext="parts_shipping_page"
            preferredVehicleInitial={isRu ? "Запчасти для американского автомобиля" : "Parts for a US vehicle"}
          />
        </div>
      </section>
    </div>
  );
}
