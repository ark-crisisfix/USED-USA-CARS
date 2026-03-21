import UsedCarsUsaPage from "@/components/pages/UsedCarsUsaPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Used cars from USA — buy from US auctions"),
  description:
    "NorthAm Cars: buy used cars from USA auctions (Copart, IAAI). Direct access, savings, and delivery — northamcars.com.",
};

export default function Page() {
  return <UsedCarsUsaPage locale="en" />;
}
