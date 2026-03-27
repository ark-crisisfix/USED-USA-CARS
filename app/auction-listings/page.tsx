import type { Metadata } from "next";
import AuctionListingsPage from "@/components/pages/AuctionListingsPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Площадки с аукционными лотами из США и Канады"),
  description:
    "Смотрите реальные листинги Copart, IAAI, IAA Canada и ADESA Public Auctions Canada, а затем присылайте нам ссылку или номер лота для расчёта импорта.",
  alternates: {
    canonical: `${SITE_URL}/auction-listings`,
    languages: {
      en: `${SITE_URL}/en/auction-listings`,
      ru: `${SITE_URL}/auction-listings`,
    },
  },
};

export default function Page() {
  return <AuctionListingsPage locale="ru" />;
}
