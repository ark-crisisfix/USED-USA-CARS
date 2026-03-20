import Link from 'next/link';

export const metadata = {
  title: 'Pricing - Used Cars USA Service Fees',
  description: 'Transparent pricing structure for buying and importing cars from USA auto auctions.',
};

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Pricing & Fees</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          We believe in complete transparency. No hidden markups or surprise bills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Base Package */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-2">Basic Broker Service</h2>
            <div className="text-4xl font-black text-blue-600 mb-6">$500 <span className="text-lg font-medium text-gray-500">/ car</span></div>
            <p className="text-gray-600 mb-6 flex-grow">
              For buyers who only need us to bid, buy, and handle the title paperwork.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> Access to Copart / IAAI
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> Dealer bidding limits
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> Title processing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> Basic lot history check
              </li>
            </ul>
            <Link href="/contact" className="block text-center w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold p-3 rounded-lg transition-colors">
              Choose Basic
            </Link>
          </div>

          {/* Full Package */}
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 font-bold px-4 py-1 rounded-bl-lg text-sm">Most Popular</div>
            <h2 className="text-2xl font-bold mb-2">Turnkey Export</h2>
            <div className="text-4xl font-black mb-6">$850 <span className="text-lg font-medium text-blue-200">/ car</span></div>
            <p className="text-blue-100 mb-6 flex-grow">
              We handle everything from auction bidding to delivering the car to your destination port.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> Everything in Basic
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> Detailed Carfax/AutoCheck
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> Land transport arrangement
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> Ocean freight booking
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> Export customs clearance
              </li>
            </ul>
            <Link href="/contact" className="block text-center w-full bg-white hover:bg-gray-100 text-blue-700 font-bold p-3 rounded-lg transition-colors shadow">
              Choose Turnkey
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Additional Costs (Third-Party)</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">Auction Fees (Copart/IAAI)</span>
              <span>Depends on bid (usually $400 - $800)</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">Land Transport to Port</span>
              <span>$250 - $1,500 (depends on distance)</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">Ocean Freight (40HQ container share)</span>
              <span>$1,000 - $1,800 (depends on destination)</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">Bank Wire Fees</span>
              <span>$30 - $50 (depends on your bank)</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/calculator" className="text-blue-600 font-semibold hover:underline">
              Try our Cost Calculator for an exact estimate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
