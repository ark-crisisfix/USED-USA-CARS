import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Контакты | Used Cars USA",
  description: "Связь с командой: расчёт, вопросы по аукционам и доставке.",
};

export default function Page() {
  return <ContactPage locale="ru" />;
}
