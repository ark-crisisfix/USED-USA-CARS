import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Тарифы и сервис"),
  description: "NorthAm Cars: комиссии за выкуп и экспорт с аукционов США — northamcars.com.",
};

export default function Page() {
  return <PricingPage locale="ru" />;
}
