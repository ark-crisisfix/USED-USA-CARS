import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Тарифы и сервис | Used Cars USA",
  description: "Прозрачная структура комиссий за выкуп и экспорт с аукционов США.",
};

export default function Page() {
  return <PricingPage locale="ru" />;
}
