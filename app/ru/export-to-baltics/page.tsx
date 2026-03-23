import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Экспорт авто из США в Прибалтику"),
  description:
    "NorthAm Cars: аукционы США, доставка в Литву, Латвию и Эстонию, логистика через европейские порты — northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="baltics" />;
}
