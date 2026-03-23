import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Export cars from USA to Poland — practical EU route"),
  description:
    "NorthAm Cars: USA auctions to Poland — practical vehicle sourcing, EU port logistics, and export support. northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="poland" />;
}
