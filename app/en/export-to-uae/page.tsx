import ExportLandingPage from "@/components/pages/ExportLandingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Export cars from USA to UAE — direct delivery"),
  description:
    "NorthAm Cars: USA auctions to Jebel Ali, UAE — clean titles, full export. northamcars.com.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="uae" />;
}
