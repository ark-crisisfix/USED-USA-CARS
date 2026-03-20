import type { Metadata } from "next";
import UsedCarsUsaPage from "@/components/pages/UsedCarsUsaPage";

export const metadata: Metadata = {
  title: "Авто из США с аукциона | Used Cars USA",
  description:
    "Подержанные авто из США: Copart, IAAI, доставка в Украину и ОАЭ. Экономия и прозрачные условия.",
};

export default function Page() {
  return <UsedCarsUsaPage locale="ru" />;
}
