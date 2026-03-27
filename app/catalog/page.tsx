import type { Metadata } from "next";
import CatalogPage from "@/components/pages/CatalogPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Каталог авто с аукционов США"),
  description: "NorthAm Cars: примеры лотов Copart и IAAI — northamcars.com.",
};

export default function Page() {
  return <CatalogPage locale="ru" />;
}
