import UsedCarsCanadaPage from "@/components/pages/UsedCarsCanadaPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Used cars from Canada — auction access"),
  description:
    "NorthAm Cars: Canadian auction cars, export, metric specs — northamcars.com.",
};

export default function Page() {
  return <UsedCarsCanadaPage locale="en" />;
}
