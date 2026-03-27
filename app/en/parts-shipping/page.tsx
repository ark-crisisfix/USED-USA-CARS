import PartsShippingPage from "@/components/pages/PartsShippingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("US car parts sourcing and shipping"),
  description:
    "NorthAm Cars sources and ships parts for American vehicles: OEM, used, donor parts, consolidation, and export logistics.",
};

export default function Page() {
  return <PartsShippingPage locale="en" />;
}
