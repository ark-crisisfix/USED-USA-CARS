import AuctionSourcesSection from "@/components/AuctionSourcesSection";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import cars from "@/data/cars.json";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function CatalogPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).catalog;
  const lead = getDictionary(locale).leadForm;
  const hasCars = cars.length > 0;
  const emptyTitle = locale === "ru" ? "Публичные примерные лоты удалены" : "Public sample lots were removed";
  const emptyBody =
    locale === "ru"
      ? "На этой странице больше не показываются демонстрационные карточки. Пришлите ссылку на реальный лот Copart или IAAI, и мы подготовим проверку, расчет и план доставки."
      : "This page no longer shows demo listings. Send us a live Copart or IAAI lot link and we will prepare a review, estimate, and delivery plan.";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">{t.subtitle}</p>

        <div className="space-y-10">
          {hasCars ? null : (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{emptyTitle}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">{emptyBody}</p>
            </div>
          )}

          <AuctionSourcesSection locale={locale} />

          <LeadFormUniversal
            heading={lead.defaultTitle}
            formType="similar_car"
            sourceContext="catalog_footer"
          />
        </div>
      </div>
    </div>
  );
}
