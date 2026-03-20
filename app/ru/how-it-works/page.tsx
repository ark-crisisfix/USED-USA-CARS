import type { Metadata } from "next";
import HowItWorksPage from "@/components/pages/HowItWorksPage";

export const metadata: Metadata = {
  title: "Как купить авто с аукциона США | Used Cars USA",
  description: "Пошагово: договор, ставки, оплата, доставка и таможня.",
};

export default function Page() {
  return <HowItWorksPage locale="ru" />;
}
