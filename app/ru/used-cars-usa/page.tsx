import type { Metadata } from "next";
import UsedCarsUsaPage from "@/components/pages/UsedCarsUsaPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто из США с аукциона"),
  description:
    "NorthAm Cars: подержанные авто из США (Copart, IAAI), доставка — northamcars.com.",
};

export default function Page() {
  return <UsedCarsUsaPage locale="ru" />;
}
