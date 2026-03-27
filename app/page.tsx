import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { metaTitleWithSeoKeywords, SITE_BRAND, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто из США под заказ и с аукциона Copart / IAAI"),
  description:
    "NorthAm Cars: авто из США, авто с аукциона США и доставка под ключ. Помогаем купить машину в Америке через Copart и IAAI, проверить лот и посчитать итоговый бюджет.",
  keywords: [
    "авто из сша",
    "авто с аукциона сша",
    "машина из сша",
    "купить машину в америке",
    "машины из сша",
    "авто из сша под заказ",
    "copart",
    "iaai",
  ],
  alternates: {
    canonical: `${SITE_URL}`,
    languages: {
      en: `${SITE_URL}/en`,
      ru: `${SITE_URL}`,
    },
  },
  openGraph: {
    title: `Авто из США под заказ и с аукциона | ${SITE_BRAND}`,
    description:
      "Авто из США под заказ, подбор лотов Copart и IAAI, расчёт бюджета и доставка под ключ.",
    url: SITE_URL,
    siteName: SITE_BRAND,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RuHomePage() {
  return <HomePage locale="ru" />;
}
