import type { Metadata } from "next";
import CalculatorClient from "@/components/pages/CalculatorClient";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Калькулятор доставки авто из США"),
  description: "NorthAm Cars: ориентир по аукциону, фрахту и пошлинам — northamcars.com.",
};

export default function Page() {
  return <CalculatorClient locale="ru" />;
}
