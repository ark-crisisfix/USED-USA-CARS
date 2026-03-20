import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";

export const metadata: Metadata = {
  title: "Импорт авто из США в Украину | Used Cars USA",
  description: "Выкуп с Copart/IAAI, доставка, таможня и ремонт под ключ.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="ukraine" />;
}
