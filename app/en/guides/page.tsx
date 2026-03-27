import type { Metadata } from "next";
import GuidesIndexPage from "@/components/pages/GuidesIndexPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Guides about car import from USA auctions"),
  description:
    "Short guides about buying cars from US auctions, shipping, customs, and route-specific delivery logic for international buyers.",
  alternates: {
    canonical: `${SITE_URL}/en/guides`,
    languages: {
      en: `${SITE_URL}/en/guides`,
      ru: `${SITE_URL}/guides`,
      uk: `${SITE_URL}/uk/guides`,
    },
  },
};

export default function Page() {
  return <GuidesIndexPage locale="en" />;
}
