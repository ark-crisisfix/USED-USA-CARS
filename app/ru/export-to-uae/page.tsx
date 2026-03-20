import type { Metadata } from "next";
import ExportLandingPage from "@/components/pages/ExportLandingPage";

export const metadata: Metadata = {
  title: "Экспорт авто из США в ОАЭ | Used Cars USA",
  description: "Доставка в Джебель-Али, чистые титулы, премиум и SUV.",
};

export default function Page() {
  return <ExportLandingPage locale="ru" country="uae" />;
}
