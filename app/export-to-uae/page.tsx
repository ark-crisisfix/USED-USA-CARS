import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Экспорт авто из США в ОАЭ"),
  description: "NorthAm Cars: Джебель-Али, чистые титулы — northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="uae" />;
}
