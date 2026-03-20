import type { Metadata } from "next";
import UsedCarsCanadaPage from "@/components/pages/UsedCarsCanadaPage";

export const metadata: Metadata = {
  title: "Авто из Канады с аукциона | Used Cars USA",
  description: "Канадские аукционы: метрические приборы, зимняя комплектация, экспорт.",
};

export default function Page() {
  return <UsedCarsCanadaPage locale="ru" />;
}
