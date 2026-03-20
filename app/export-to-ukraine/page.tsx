import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata = {
  title: 'Import Cars from USA to Ukraine - Full Service',
  description: 'Buy salvage and clean cars from Copart/IAAI with delivery to Ukraine. Turnkey service: buying, shipping, customs, and repair.',
};

export default function ExportToUkrainePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Import Cars from USA to Ukraine
          </h1>
          <p className="text-xl text-gray-600">
            Turnkey service: from Copart/IAAI auction bidding to customs clearance and repair in Ukraine. Save up to 40% on your next car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Process */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">How The Process Works</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold">Selection & Verification</h3>
                    <p className="text-gray-600">We analyze Carfax, auction history, and dealer reports to pick the safest options with minimal damage.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold">Auction & Payment</h3>
                    <p className="text-gray-600">We win the lot at dealer prices. You pay the invoice directly via SWIFT transfer.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold">Shipping (6-8 Weeks)</h3>
                    <p className="text-gray-600">Transport to European ports (Klaipeda, Bremerhaven, etc.) and then by car carrier to Ukraine.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold">Customs & Repair (Optional)</h3>
                    <p className="text-gray-600">We clear customs in Ukraine. If it&apos;s a salvage car, our partner service stations handle full repairs and certification.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Breakdown */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Typical Cost Breakdown (Example: VW Passat 2019)</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Auction Price</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Auction Fees</span>
                  <span className="font-semibold">$650</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Shipping to EU Port + Land to UA</span>
                  <span className="font-semibold">$1,600</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Customs Duty (UA)</span>
                  <span className="font-semibold">~$1,800</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Broker & Certification</span>
                  <span className="font-semibold">$450</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Our Service Fee</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between text-lg pt-2 text-emerald-700 font-bold">
                  <span>Total Before Repair</span>
                  <span>$9,500</span>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Note: Repair costs vary. Average local market price: $13,500. Estimated savings: 30%.</p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Why choose us for Ukraine?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="mr-2">✅</span> Direct EU port access</li>
                  <li className="flex items-start"><span className="mr-2">✅</span> Trusted repair partners</li>
                  <li className="flex items-start"><span className="mr-2">✅</span> Fixed broker fees</li>
                  <li className="flex items-start"><span className="mr-2">✅</span> Turnkey document processing</li>
                </ul>
              </div>
              <LeadForm title="Get a Custom Calculation for UA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
