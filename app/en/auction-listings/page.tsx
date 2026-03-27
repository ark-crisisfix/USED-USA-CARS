import type { Metadata } from "next";
import AuctionListingsPage from "@/components/pages/AuctionListingsPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Auction listing sites for US and Canadian car lots"),
  description:
    "Browse real auction listing sites like Copart, IAAI, IAA Canada, and ADESA Public Auctions Canada, then send us the lot link or lot number for a practical import estimate.",
  alternates: {
    canonical: `${SITE_URL}/en/auction-listings`,
    languages: {
      en: `${SITE_URL}/en/auction-listings`,
      ru: `${SITE_URL}/auction-listings`,
    },
  },
};

export default function Page() {
  return <AuctionListingsPage locale="en" />;
}
