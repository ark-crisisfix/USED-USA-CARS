import type { Metadata } from "next";
import UsedCarsCanadaPage from "@/components/pages/UsedCarsCanadaPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто из Канады с аукциона"),
  description: "NorthAm Cars: канадские аукционы и экспорт — northamcars.com.",
};

export default function Page() {
  return <UsedCarsCanadaPage locale="ru" />;
}
