import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Import cars from USA to Ukraine — full service"),
  description:
    "NorthAm Cars: Copart/IAAI to Ukraine — buying, shipping, customs, repair. northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="ukraine" />;
}
