import ContactPage from "@/components/pages/ContactPage";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Contact us"),
  description:
    "Contact NorthAm Cars (northamcars.com): quotes, USA auction buying, export to Ukraine, UAE, and more.",
};

export default function Page() {
  return <ContactPage locale="en" />;
}
