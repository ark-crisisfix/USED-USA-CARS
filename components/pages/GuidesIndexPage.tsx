import Link from "next/link";
import { seoGuides, type SeoGuideLocale } from "@/data/seo-guides";

function localeBase(locale: SeoGuideLocale) {
  if (locale === "ru") return "/ru";
  if (locale === "uk") return "/uk";
  return "";
}

export default function GuidesIndexPage({ locale }: { locale: SeoGuideLocale }) {
  const base = localeBase(locale);
  const copy =
    locale === "ru"
      ? {
          title: "SEO-статьи об импорте автомобилей из США",
          subtitle:
            "Короткие практические материалы о том, как работает покупка, доставка, таможня и выбор автомобилей для разных стран.",
          reading: "мин чтения",
          open: "Открыть статью",
        }
      : locale === "uk"
        ? {
            title: "SEO-статті про імпорт автомобілів зі США",
            subtitle:
              "Короткі практичні матеріали про те, як працюють купівля, доставка, митниця та підбір автомобілів для різних країн.",
            reading: "хв читання",
            open: "Відкрити статтю",
          }
        : {
            title: "SEO guides about importing cars from the USA",
            subtitle:
              "Short practical articles explaining how buying, delivery, customs, and vehicle selection work for different destinations.",
            reading: "min read",
            open: "Open guide",
          };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{copy.title}</h1>
          <p className="text-xl text-gray-600">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {seoGuides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  {guide.category[locale]}
                </span>
                <span className="text-sm text-gray-500">
                  {guide.readingMinutes} {copy.reading}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{guide.title[locale]}</h2>
              <p className="text-gray-600 mb-6">{guide.description[locale]}</p>
              <Link
                href={`${base}/guides/${guide.slug}`}
                className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900"
              >
                {copy.open}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
