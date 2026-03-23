import Link from "next/link";
import { SITE_BRAND, SITE_URL } from "@/lib/siteMeta";
import type { SeoGuide, SeoGuideLocale } from "@/data/seo-guides";

function localeBase(locale: SeoGuideLocale) {
  if (locale === "ru") return "/ru";
  if (locale === "uk") return "/uk";
  return "";
}

export default function SeoGuideArticlePage({
  locale,
  guide,
}: {
  locale: SeoGuideLocale;
  guide: SeoGuide;
}) {
  const base = localeBase(locale);
  const articlePath = `${base}/guides/${guide.slug}`;
  const articleUrl = `${SITE_URL}${articlePath}`;
  const alternates = {
    en: `${SITE_URL}/guides/${guide.slug}`,
    ru: `${SITE_URL}/ru/guides/${guide.slug}`,
    uk: `${SITE_URL}/uk/guides/${guide.slug}`,
  };
  const copy =
    locale === "ru"
      ? {
          back: "Все статьи",
          reading: "мин чтения",
          ctaTitle: "Нужен расчёт под ваш маршрут?",
          ctaBody:
            "Если уже есть конкретная модель или направление, проще всего перейти к запросу расчёта, маршрутам доставки или калькулятору.",
          cta1: "Калькулятор стоимости",
          cta2: "Страница Украины",
          cta3: "Страница ОАЭ",
        }
      : locale === "uk"
        ? {
            back: "Усі статті",
            reading: "хв читання",
            ctaTitle: "Потрібен розрахунок під ваш маршрут?",
            ctaBody:
              "Якщо вже є конкретна модель або напрямок, найпростіше перейти до запиту розрахунку, сторінок доставки або калькулятора.",
            cta1: "Калькулятор вартості",
            cta2: "Сторінка України",
            cta3: "Сторінка ОАЕ",
          }
        : {
            back: "All guides",
            reading: "min read",
            ctaTitle: "Need a quote for your route?",
            ctaBody:
              "If you already have a model or destination in mind, the next step is usually the calculator or a route-specific delivery page.",
            cta1: "Open cost calculator",
            cta2: "Ukraine route",
            cta3: "UAE route",
          };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href={`${base}/guides`} className="inline-flex mb-6 text-blue-700 font-semibold hover:text-blue-900">
          ← {copy.back}
        </Link>

        <article className="rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              {guide.category[locale]}
            </span>
            <span className="text-sm text-gray-500">
              {guide.readingMinutes} {copy.reading}
            </span>
            <span className="text-sm text-gray-500">{guide.updatedAt}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{guide.title[locale]}</h1>
          <p className="text-xl text-gray-600 mb-8">{guide.intro[locale]}</p>

          <div className="space-y-8">
            {guide.sections.map((section) => (
              <section key={section.title.en}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title[locale]}</h2>
                <p className="text-gray-700 leading-8">{section.body[locale]}</p>
              </section>
            ))}
          </div>
        </article>

        <section className="mt-10 rounded-3xl bg-gray-900 text-white p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-3">{copy.ctaTitle}</h2>
          <p className="text-gray-300 mb-6">{copy.ctaBody}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`${base}/calculator`} className="rounded-lg bg-white text-gray-900 px-4 py-3 font-semibold">
              {copy.cta1}
            </Link>
            <Link href={`${base}/export-to-ukraine`} className="rounded-lg border border-gray-600 px-4 py-3 font-semibold">
              {copy.cta2}
            </Link>
            <Link href={`${base}/export-to-uae`} className="rounded-lg border border-gray-600 px-4 py-3 font-semibold">
              {copy.cta3}
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: guide.title[locale],
              description: guide.description[locale],
              dateModified: guide.updatedAt,
              inLanguage: locale,
              mainEntityOfPage: articleUrl,
              author: {
                "@type": "Organization",
                name: SITE_BRAND,
              },
              publisher: {
                "@type": "Organization",
                name: SITE_BRAND,
                url: SITE_URL,
              },
              url: articleUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE_URL}${base || "/"}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Guides",
                  item: `${SITE_URL}${base}/guides`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: guide.title[locale],
                  item: articleUrl,
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}
