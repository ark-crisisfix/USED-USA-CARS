import { notFound } from "next/navigation";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Car = {
  lot_id: string;
  make: string;
  model: string;
  year: number;
  mileage: string;
  damage: string;
  auction_price: number;
  estimated_total: number;
  image: string;
};

export default function CarDetailPage({ car, locale }: { car: Car | undefined; locale: Locale }) {
  if (!car) notFound();

  const t = getDictionary(locale).car;
  const amount = (car.auction_price + 500).toLocaleString();
  const aiRisk = t.aiRisk.replace("{damage}", car.damage.toLowerCase());
  const bidFull = t.aiBid.replace("{amount}", amount);
  const bidColon = bidFull.indexOf(":");
  const formTitle = t.requestThis.replace("{make}", car.make);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
          {car.year} {car.make} {car.model}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96 md:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.vehicleDetails}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <span className="block text-gray-500 mb-1">{t.lotId}</span>
                  <span className="font-semibold">{car.lot_id}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.make}</span>
                  <span className="font-semibold">{car.make}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.model}</span>
                  <span className="font-semibold">{car.model}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.year}</span>
                  <span className="font-semibold">{car.year}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.mileage}</span>
                  <span className="font-semibold">
                    {car.mileage} {getDictionary(locale).common.mi}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.damage}</span>
                  <span className="font-semibold text-red-600">{car.damage}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.title}</span>
                  <span className="font-semibold">{t.salvage}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">{t.drive}</span>
                  <span className="font-semibold">{t.awd}</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-indigo-900">
              <h3 className="font-bold mb-2 flex items-center">
                <span className="mr-2">🤖</span>
                {t.aiTitle}
              </h3>
              <p className="text-sm mb-2">{aiRisk}</p>
              <p className="text-sm">
                {bidColon >= 0 ? (
                  <>
                    <strong>{bidFull.slice(0, bidColon + 1)}</strong>
                    {bidFull.slice(bidColon + 1)}
                  </>
                ) : (
                  bidFull
                )}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.priceBreakdown}</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center text-gray-700">
                  <span>{t.estAuction}</span>
                  <span className="font-semibold text-lg">${car.auction_price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{t.auctionFees}</span>
                  <span>$850</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{t.landTransport}</span>
                  <span>$450</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{t.oceanFreight}</span>
                  <span>$1,200</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{t.serviceFee}</span>
                  <span>$500</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-center font-bold text-xl text-emerald-700">
                  <span>{t.totalEstimated}</span>
                  <span>${car.estimated_total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{t.priceNote}</p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">{t.trustTitle}</h3>
              <p className="text-blue-100 text-sm">{t.trustSub}</p>
            </div>

            <LeadFormUniversal
              heading={formTitle}
              formType="similar_car"
              carReferenceId={car.lot_id}
              sourceContext={`catalog_lot:${car.lot_id}`}
              compact
              submitButtonText={locale === "ru" ? "Запросить" : "Request this car"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
