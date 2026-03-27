import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Экспорт авто из США в Польшу"),
  description:
    "NorthAm Cars: аукционы США, доставка в Польшу, европейская логистика и экспортная поддержка — northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="poland" />;
}
