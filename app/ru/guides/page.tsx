import type { Metadata } from "next";
import GuidesIndexPage from "@/components/pages/GuidesIndexPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Статьи об импорте авто с аукционов США"),
  description:
    "Короткие SEO-статьи о покупке авто с аукционов США, доставке, таможне и логике маршрутов в разные страны.",
  alternates: {
    canonical: `${SITE_URL}/ru/guides`,
    languages: {
      en: `${SITE_URL}/guides`,
      ru: `${SITE_URL}/ru/guides`,
      uk: `${SITE_URL}/uk/guides`,
    },
  },
};

export default function Page() {
  return <GuidesIndexPage locale="ru" />;
}
