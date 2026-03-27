import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Export cars from USA to Baltics — Lithuania, Latvia, Estonia"),
  description:
    "NorthAm Cars: vehicle sourcing from USA auctions with delivery to Lithuania, Latvia, and Estonia. northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="baltics" />;
}
