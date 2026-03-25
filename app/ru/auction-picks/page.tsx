import type { Metadata } from "next";
import AuctionPicksPage from "@/components/pages/AuctionPicksPage";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Лучшие аукционные лоты и weekly shortlist"),
  description:
    "Посмотрите demo-витрину будущей еженедельной подборки интересных лотов по направлениям, бюджету и типу автомобиля, а затем отправьте нам запрос по интересующим вариантам.",
  alternates: {
    canonical: `${SITE_URL}/ru/auction-picks`,
    languages: {
      en: `${SITE_URL}/auction-picks`,
      ru: `${SITE_URL}/ru/auction-picks`,
    },
  },
};

export default function Page() {
  return <AuctionPicksPage locale="ru" />;
}
