import type { Locale } from "@/lib/i18n";

const SOURCES = [
  {
    name: "Copart USA",
    href: "https://www.copart.com/",
    noteEn: "Large US salvage and insurance auction marketplace.",
    noteRu: "Крупная американская площадка страховых и salvage-аукционов.",
  },
  {
    name: "IAAI USA",
    href: "https://www.iaai.com/",
    noteEn: "Public US auction listings with a wide range of repairable and clean-title vehicles.",
    noteRu: "Публичные листинги по США с большим выбором repairable и clean-title автомобилей.",
  },
  {
    name: "IAAI Canada",
    href: "https://ca.iaai.com/",
    noteEn: "Canadian inventory and local auction listings for cross-border sourcing.",
    noteRu: "Канадский инвентарь и локальные аукционные листинги для подбора через Северную Америку.",
  },
  {
    name: "ADESA Public Auctions Canada",
    href: "https://www.adesapublicauctions.ca/#!/loc/home/lang/en/",
    noteEn: "Canadian public auction listings with practical retail-oriented inventory.",
    noteRu: "Канадские публичные аукционы с практичными лотами под дальнейшую покупку и доставку.",
  },
] as const;

export default function AuctionSourcesSection({ locale }: { locale: Locale }) {
  const isRu = locale === "ru";
  const copy = isRu
    ? {
        eyebrow: "Где смотреть лоты",
        title: "Актуальные сайты с листингами, где можно подобрать конкретный лот",
        body:
          "Если хочешь участвовать в подборе, открой площадки ниже, выбери понравившийся автомобиль и пришли нам ссылку или номер лота. Мы проверим историю, оценим риски, просчитаем доставку и дадим нормальный расчет.",
        tipTitle: "Что можно прислать нам для работы",
        tipItems: [
          "ссылку на лот",
          "номер лота / stock number",
          "марку, модель и бюджет",
          "несколько вариантов для сравнения",
        ],
        openLabel: "Открыть площадку",
        noteLead: "После этого просто отправь нам лот через форму, WhatsApp или Telegram.",
      }
    : {
        eyebrow: "Where to browse lots",
        title: "Live listing sites where you can pick a specific lot for us to review",
        body:
          "If you want to participate in the sourcing process, open the marketplaces below, choose a vehicle you like, and send us the link or lot number. We will review history, estimate risk, calculate delivery, and come back with a practical quote.",
        tipTitle: "What you can send us",
        tipItems: [
          "the lot URL",
          "lot number / stock number",
          "make, model, and budget",
          "a shortlist of options to compare",
        ],
        openLabel: "Open Listing Site",
        noteLead: "Then send the lot to us through the form, WhatsApp, or Telegram.",
      };

  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">{copy.eyebrow}</div>
        <h2 className="mt-3 text-3xl font-black text-slate-950">{copy.title}</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">{copy.body}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {SOURCES.map((source) => (
          <article key={source.name} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-950">{source.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{isRu ? source.noteRu : source.noteEn}</p>
            <a
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {copy.openLabel}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[1.5rem] bg-blue-50 p-6 ring-1 ring-blue-100">
        <h3 className="text-xl font-bold text-slate-950">{copy.tipTitle}</h3>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {copy.tipItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
              <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-blue-900">{copy.noteLead}</p>
      </div>
    </section>
  );
}
