import type { Metadata } from "next";
import CatalogPage from "@/components/pages/CatalogPage";

export const metadata: Metadata = {
  title: "Каталог авто с аукционов США | Used Cars USA",
  description: "Примеры лотов Copart и IAAI — подбор и выкуп под ваш бюджет.",
};

export default function Page() {
  return <CatalogPage locale="ru" />;
}
