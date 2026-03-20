import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata = {
  title: 'Export Cars from USA to UAE - Direct Delivery',
  description: 'Buy clean title or lightly damaged cars from USA auctions with direct shipping to Jebel Ali, UAE. Complete export service.',
};

export default function ExportToUAEPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Export Cars from USA to UAE
          </h1>
          <p className="text-xl text-gray-600">
            Direct access to Copart/IAAI with premium shipping to Jebel Ali. Focus on clean titles and high-value vehicles.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-bold">Selection & Verification</h3>
                    <p className="text-gray-600">We source clean title or very minor damage vehicles (often luxury or high-demand models) specifically suited for the UAE market.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-bold">Auction & Secure Payment</h3>
                    <p className="text-gray-600">We handle the bidding. Once won, you pay via secure bank transfer (SWIFT).</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-bold">Consolidation & Shipping (4-8 Weeks)</h3>
                    <p className="text-gray-600">We arrange direct container shipping from East Coast ports (NJ, Savannah) to Jebel Ali.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-bold">Customs Clearance (UAE)</h3>
                    <p className="text-gray-600">Our partners in Dubai can assist with RTA compliance and clearing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why UAE */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Why Export to UAE?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Luxury at a Discount</h3>
                  <p className="text-amber-800">
                    High-end models (Lexus, Mercedes, Tesla) are available at significant discounts in the USA compared to the Gulf market.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🚢</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Efficient Logistics</h3>
                  <p className="text-amber-800">
                    Jebel Ali is one of the world&apos;s most efficient ports, making container unloading and customs processing incredibly fast.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">UAE specific advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="mr-2 text-amber-500">★</span> Focus on Clean Titles</li>
                  <li className="flex items-start"><span className="mr-2 text-amber-500">★</span> Jebel Ali direct freight</li>
                  <li className="flex items-start"><span className="mr-2 text-amber-500">★</span> Fast 5% customs duty processing</li>
                  <li className="flex items-start"><span className="mr-2 text-amber-500">★</span> Luxury & SUV specialists</li>
                </ul>
              </div>
              <LeadForm title="Get a Quote for UAE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
