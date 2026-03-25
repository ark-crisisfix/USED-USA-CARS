import PartsShippingPage from "@/components/pages/PartsShippingPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Подбор и отправка запчастей для авто из США"),
  description:
    "NorthAm Cars помогает с подбором и отправкой запчастей для американских автомобилей: OEM, б/у, донорские детали и логистика.",
};

export default function Page() {
  return <PartsShippingPage locale="ru" />;
}
