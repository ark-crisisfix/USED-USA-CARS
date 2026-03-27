import type { Metadata } from "next";
import UsedCarsUsaPage from "@/components/pages/UsedCarsUsaPage";
import { metaTitleWithSeoKeywords, SITE_BRAND, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Used cars from USA - buy from US auctions"),
  description:
    "NorthAm Cars: buy used cars from USA auctions through Copart and IAAI. Get lot checks, full landed-cost estimates, and international delivery.",
  alternates: {
    canonical: `${SITE_URL}/en/used-cars-usa`,
    languages: {
      en: `${SITE_URL}/en/used-cars-usa`,
      ru: `${SITE_URL}/used-cars-usa`,
    },
  },
  openGraph: {
    title: `Used cars from USA auctions | ${SITE_BRAND}`,
    description:
      "Buy used cars from USA auctions through Copart and IAAI with lot checks and landed-cost estimates.",
    url: `${SITE_URL}/en/used-cars-usa`,
    siteName: SITE_BRAND,
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return <UsedCarsUsaPage locale="en" />;
}
