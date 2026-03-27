import type { Metadata } from "next";
import GuidesIndexPage from "@/components/pages/GuidesIndexPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Статті про імпорт авто з аукціонів США"),
  description:
    "Короткі SEO-статті про купівлю авто з аукціонів США, доставку, митницю та логіку маршрутів для різних країн.",
  alternates: {
    canonical: `${SITE_URL}/uk/guides`,
    languages: {
      en: `${SITE_URL}/en/guides`,
      ru: `${SITE_URL}/guides`,
      uk: `${SITE_URL}/uk/guides`,
    },
  },
};

export default function Page() {
  return <GuidesIndexPage locale="uk" />;
}
