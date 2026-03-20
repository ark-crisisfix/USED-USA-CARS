import ExportLandingPage from "@/components/pages/ExportLandingPage";

export const metadata = {
  title: "Import Cars from USA to Ukraine - Full Service",
  description:
    "Buy salvage and clean cars from Copart/IAAI with delivery to Ukraine. Turnkey service: buying, shipping, customs, and repair.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="ukraine" />;
}
