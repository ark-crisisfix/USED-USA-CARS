import type { Metadata } from "next";
import AuctionPicksPage from "@/components/pages/AuctionPicksPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Featured auction picks and weekly lot shortlist"),
  description:
    "Preview a curated weekly shortlist of interesting auction lots by destination, budget, and vehicle type, then request a practical quote on the lots you like.",
  alternates: {
    canonical: `${SITE_URL}/en/auction-picks`,
    languages: {
      en: `${SITE_URL}/en/auction-picks`,
      ru: `${SITE_URL}/auction-picks`,
    },
  },
};

export default function Page() {
  return <AuctionPicksPage locale="en" />;
}
