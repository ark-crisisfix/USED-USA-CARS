import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Real Export Cases - Used Cars from USA',
  description: 'See real examples of cars bought from USA auto auctions, shipped internationally, and the final savings for our clients.',
};

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      make: 'Toyota RAV4 LE AWD',
      year: 2021,
      damage: 'Front End (Light)',
      destination: 'Odessa, Ukraine',
      auctionPrice: 11500,
      totalCostToPort: 14800,
      repairCost: 1500,
      localMarketPrice: 22500,
      savings: 6200,
      image: 'https://placehold.co/800x600/1e3a8a/ffffff?text=Toyota+RAV4+2021'
    },
    {
      id: 2,
      make: 'Tesla Model 3 Long Range',
      year: 2022,
      damage: 'Rear Bumper',
      destination: 'Jebel Ali, UAE',
      auctionPrice: 18000,
      totalCostToPort: 21500,
      repairCost: 800,
      localMarketPrice: 29000,
      savings: 6700,
      image: 'https://placehold.co/800x600/4f46e5/ffffff?text=Tesla+Model+3+2022'
    },
    {
      id: 3,
      make: 'Ford F-150 XLT',
      year: 2020,
      damage: 'Hail Damage',
      destination: 'Bremerhaven, Germany',
      auctionPrice: 21000,
      totalCostToPort: 25500,
      repairCost: 2000,
      localMarketPrice: 35000,
      savings: 7500,
      image: 'https://placehold.co/800x600/0f172a/ffffff?text=Ford+F-150+2020'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Real Import Cases</h1>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          See exactly how much our clients saved by importing directly from USA auctions.
        </p>

        <div className="space-y-16">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.make} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md">
                  Saved ${c.savings.toLocaleString()}
                </div>
              </div>
              <div className="p-8 md:w-3/5">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{c.year} {c.make}</h2>
                    <p className="text-gray-500">Delivered to: <span className="font-medium text-gray-800">{c.destination}</span></p>
                  </div>
                  <span className="bg-red-100 text-red-700 font-medium px-3 py-1 rounded-full text-sm">
                    Damage: {c.damage}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Winning Bid</div>
                    <div className="font-semibold text-gray-900 text-lg">${c.auctionPrice.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Total to Port (inc. our fee)</div>
                    <div className="font-semibold text-gray-900 text-lg">${c.totalCostToPort.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Estimated Repair</div>
                    <div className="font-semibold text-gray-900 text-lg">${c.repairCost.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Local Market Price</div>
                    <div className="font-bold text-red-600 text-lg line-through decoration-2">${c.localMarketPrice.toLocaleString()}</div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Final Cost (Repaired)</div>
                      <div className="text-2xl font-black text-gray-900">${(c.totalCostToPort + c.repairCost).toLocaleString()}</div>
                    </div>
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                      Get Similar Car
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Want to see more examples?</h2>
          <p className="text-gray-600 mb-8">
            Contact us and tell us what you&apos;re looking for. We&apos;ll provide a detailed estimate based on recent auction data.
          </p>
          <LeadForm title="Request Custom Estimate" />
        </div>
      </div>
    </div>
  );
}
