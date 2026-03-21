import PricingPage from "@/components/pages/PricingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Pricing & service fees"),
  description:
    "NorthAm Cars: transparent fees for US auction buying and export — northamcars.com.",
};

export default function Page() {
  return <PricingPage locale="en" />;
}
