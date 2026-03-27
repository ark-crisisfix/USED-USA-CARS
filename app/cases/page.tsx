import type { Metadata } from "next";
import CasesPage from "@/components/pages/CasesPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Кейсы импорта из США"),
  description: "NorthAm Cars: аукцион, доставка, экономия — northamcars.com.",
};

export default function Page() {
  return <CasesPage locale="ru" />;
}
