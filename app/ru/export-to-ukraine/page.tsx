import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Импорт авто из США в Украину"),
  description: "NorthAm Cars: Copart/IAAI — доставка в Украину, таможня — northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="ukraine" />;
}
