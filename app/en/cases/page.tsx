import CasesPage from "@/components/pages/CasesPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Real purchase cases — US auction imports"),
  description:
    "NorthAm Cars: transparent US auction import examples — costs, shipping, savings. northamcars.com.",
};

export default function Page() {
  return <CasesPage locale="en" />;
}
