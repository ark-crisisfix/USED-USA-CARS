import ExportLandingPage from "@/components/pages/ExportLandingPage";

export const metadata = {
  title: "Export Cars from USA to UAE - Direct Delivery",
  description:
    "Buy clean title or lightly damaged cars from USA auctions with direct shipping to Jebel Ali, UAE. Complete export service.",
};

export default function Page() {
  return <ExportLandingPage locale="en" country="uae" />;
}
