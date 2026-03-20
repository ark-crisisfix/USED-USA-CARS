import type { Metadata } from "next";
import CasesPage from "@/components/pages/CasesPage";

export const metadata: Metadata = {
  title: "Кейсы импорта из США | Used Cars USA",
  description: "Примеры: ставка на аукционе, доставка, итоговая экономия.",
};

export default function Page() {
  return <CasesPage locale="ru" />;
}
