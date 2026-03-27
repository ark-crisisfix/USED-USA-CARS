import type { Metadata } from "next";
import UsedCarsUsaPage from "@/components/pages/UsedCarsUsaPage";
import { metaTitleWithSeoKeywords, SITE_BRAND, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто из США с аукциона: купить машину в Америке"),
  description:
    "Подержанные авто из США с аукционов Copart и IAAI: подбор лота, проверка истории, расчёт стоимости и доставка. Страница под запросы «авто из США», «машина из США» и «купить машину в Америке».",
  keywords: [
    "авто из сша с аукциона",
    "купить машину в америке",
    "машина из сша",
    "авто с аукциона сша",
    "copart",
    "iaai",
  ],
  alternates: {
    canonical: `${SITE_URL}/used-cars-usa`,
    languages: {
      en: `${SITE_URL}/en/used-cars-usa`,
      ru: `${SITE_URL}/used-cars-usa`,
    },
  },
  openGraph: {
    title: `Авто из США с аукциона | ${SITE_BRAND}`,
    description:
      "Купить авто из США через Copart и IAAI: подбор, проверка, доставка и понятная смета.",
    url: `${SITE_URL}/used-cars-usa`,
    siteName: SITE_BRAND,
    locale: "ru_RU",
    type: "article",
  },
};

export default function Page() {
  return <UsedCarsUsaPage locale="ru" />;
}
