import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Авто из США — аукционы Copart / IAAI и доставка",
  description:
    "Экономия до 40%: покупка с аукционов США с доставкой в Украину и ОАЭ. Прозрачные цены и полное сопровождение.",
};

export default function RuHomePage() {
  return <HomePage locale="ru" />;
}
