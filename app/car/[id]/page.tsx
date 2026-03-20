import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import cars from '@/data/cars.json';

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.lot_id,
  }));
}

export default async function CarPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const car = cars.find(c => c.lot_id === resolvedParams.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
          {car.year} {car.make} {car.model}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Gallery + Details) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96 md:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
            </div>

            {/* Car Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Vehicle Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <span className="block text-gray-500 mb-1">Lot ID</span>
                  <span className="font-semibold">{car.lot_id}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Make</span>
                  <span className="font-semibold">{car.make}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Model</span>
                  <span className="font-semibold">{car.model}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Year</span>
                  <span className="font-semibold">{car.year}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Mileage</span>
                  <span className="font-semibold">{car.mileage} mi</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Damage</span>
                  <span className="font-semibold text-red-600">{car.damage}</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Title</span>
                  <span className="font-semibold">Salvage</span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Drive</span>
                  <span className="font-semibold">AWD</span>
                </div>
              </div>
            </div>

            {/* AI Block */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-indigo-900">
              <h3 className="font-bold mb-2 flex items-center">
                <span className="mr-2">🤖</span> AI Analysis
              </h3>
              <p className="text-sm mb-2">
                <strong>Risk Level: Low.</strong> Damage is isolated to the {car.damage.toLowerCase()}, engine run and drive verified.
              </p>
              <p className="text-sm">
                <strong>Recommended Bid:</strong> Up to ${(car.auction_price + 500).toLocaleString()} to guarantee win.
              </p>
            </div>
          </div>

          {/* Sidebar (Price Breakdown + Lead Form) */}
          <div className="space-y-8">
            {/* Price Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Price Breakdown</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Estimated Auction Price</span>
                  <span className="font-semibold text-lg">${car.auction_price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Auction Fees</span>
                  <span>$850</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Land Transport (USA)</span>
                  <span>$450</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Ocean Freight</span>
                  <span>$1,200</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Our Service Fee</span>
                  <span>$500</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-center font-bold text-xl text-emerald-700">
                  <span>Total Estimated</span>
                  <span>${car.estimated_total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">* Custom clearance and destination port fees not included.</p>
              </div>
            </div>

            {/* Trust Banner */}
            <div className="bg-blue-600 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">We Handle The Full Process</h3>
              <p className="text-blue-100 text-sm">From buying at auction to delivery at your local port. Safe and transparent.</p>
            </div>

            {/* Lead Form */}
            <LeadForm title={`Request this ${car.make}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
