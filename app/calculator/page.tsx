import CalculatorClient from "@/components/pages/CalculatorClient";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Delivery cost calculator — US auctions"),
  description:
    "NorthAm Cars: estimate auction price, freight, duties, and fees — northamcars.com.",
};

export default function Page() {
  return <CalculatorClient locale="en" />;
}
