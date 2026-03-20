import type { Metadata } from "next";
import CalculatorClient from "@/components/pages/CalculatorClient";

export const metadata: Metadata = {
  title: "Калькулятор доставки авто из США | Used Cars USA",
  description: "Ориентировочная стоимость: аукцион, фрахт, пошлины и сервис.",
};

export default function Page() {
  return <CalculatorClient locale="ru" />;
}
