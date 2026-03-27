import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { metaTitleWithSeoKeywords, SITE_BRAND, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Used cars from USA auctions with delivery"),
  description:
    "NorthAm Cars: buy used cars from USA auctions through Copart and IAAI with lot checks, landed-cost estimates, and international delivery.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      en: `${SITE_URL}/en`,
      ru: SITE_URL,
    },
  },
  openGraph: {
    title: `Used cars from USA auctions | ${SITE_BRAND}`,
    description:
      "Copart and IAAI access, lot checks, landed-cost estimates, and international delivery.",
    url: `${SITE_URL}/en`,
    siteName: SITE_BRAND,
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
