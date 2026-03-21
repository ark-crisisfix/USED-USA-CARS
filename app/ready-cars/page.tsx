import ReadyCarsClient from "@/components/ready-cars/ReadyCarsClient";
import { commerce } from "@/lib/commerceCopy";
import { getAllReadyCars } from "@/lib/ready-cars";

export const metadata = {
  title: "Ready Cars — Available in Canada & Export | Used Cars USA",
  description:
    "Company-owned and partner inventory already purchased — available in Canada or ready to ship for export to Ukraine, UAE, and worldwide.",
};

export default function Page() {
  const co = commerce("en");
  const cars = getAllReadyCars();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{co.readyPageH1}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">{co.readyPageIntro}</p>
        <ReadyCarsClient cars={cars} hrefPrefix="" />
      </div>
    </div>
  );
}
