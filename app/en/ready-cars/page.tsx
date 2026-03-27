import ReadyCarsClient from "@/components/ready-cars/ReadyCarsClient";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { commerce } from "@/lib/commerceCopy";
import { getDictionary } from "@/lib/dictionaries";
import { getAllReadyCars } from "@/lib/ready-cars";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata = {
  title: metaTitleWithSeoKeywords("Ready cars — Canada & export"),
  description:
    "NorthAm Cars (northamcars.com): inventory in Canada and ready-to-ship export to Ukraine, UAE, worldwide.",
};

export default function Page() {
  const co = commerce("en");
  const lead = getDictionary("en").leadForm;
  const cars = getAllReadyCars();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{co.readyPageH1}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">{co.readyPageIntro}</p>
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900">
          3 vehicles currently in stock. Additional inventory will be added as it arrives.
        </div>
        <ReadyCarsClient cars={cars} hrefPrefix="" />
        <div className="mt-10">
          <LeadFormUniversal
            heading={lead.defaultTitle}
            formType="ready_car"
            sourceContext="ready_cars_listing"
          />
        </div>
      </div>
    </div>
  );
}
