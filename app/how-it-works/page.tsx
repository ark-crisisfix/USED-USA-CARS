import HowItWorksPage from "@/components/pages/HowItWorksPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("How it works — buying from US auctions"),
  description:
    "NorthAm Cars: step-by-step Copart & IAAI buying, export, and delivery — northamcars.com.",
};

export default function Page() {
  return <HowItWorksPage locale="en" />;
}
