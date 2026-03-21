import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто из США — Copart / IAAI и доставка"),
  description:
    "NorthAm Cars (northamcars.com): аукционы США, доставка в Украину и ОАЭ. Экономия до 40%.",
};

export default function RuHomePage() {
  return <HomePage locale="ru" />;
}
