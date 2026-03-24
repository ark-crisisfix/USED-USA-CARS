import type { Metadata } from "next";
import AuctionListingsPage from "@/components/pages/AuctionListingsPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Площадки с аукционными лотами из США и Канады"),
  description:
    "Смотрите реальные листинги Copart, IAAI, IAA Canada и ADESA Public Auctions Canada, а затем присылайте нам ссылку или номер лота для нормального расчета импорта.",
  alternates: {
    canonical: `${SITE_URL}/ru/auction-listings`,
    languages: {
      en: `${SITE_URL}/auction-listings`,
      ru: `${SITE_URL}/ru/auction-listings`,
    },
  },
};

export default function Page() {
  return <AuctionListingsPage locale="ru" />;
}
