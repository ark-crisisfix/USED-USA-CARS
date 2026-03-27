import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Контакты"),
  description: "NorthAm Cars: связь, расчёт, аукционы и доставка — northamcars.com.",
};

export default function Page() {
  return <ContactPage locale="ru" />;
}
