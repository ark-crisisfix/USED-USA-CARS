import type { Metadata } from "next";
import HowItWorksPage from "@/components/pages/HowItWorksPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Как купить авто с аукциона США"),
  description: "NorthAm Cars: договор, ставки, оплата, доставка — northamcars.com.",
};

export default function Page() {
  return <HowItWorksPage locale="ru" />;
}
