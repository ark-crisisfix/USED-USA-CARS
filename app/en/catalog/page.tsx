import CatalogPage from "@/components/pages/CatalogPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Auction car catalog — Copart & IAAI"),
  description:
    "NorthAm Cars: browse example lots we can source from US auctions — northamcars.com.",
};

export default function Page() {
  return <CatalogPage locale="en" />;
}
