import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'How It Works - Buying Cars from US Auctions',
  description: 'Learn the step-by-step process of buying a car from Copart or IAAI with our full-service export company.',
};

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">How It Works</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          From choosing your dream car to receiving the keys at your door. We handle everything.
        </p>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">1</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Consultation & Contract</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We discuss your budget, preferred models, and destination. We sign a broker agreement to represent your interests at the auction. You pay a refundable deposit (usually $500 or 10% of intended bid) to secure your buying power.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">2</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Selection & Bidding</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experts select the best lots from Copart/IAAI, checking Carfax, auction history, and hidden damage. Once you approve a lot, we bid up to your maximum limit.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">3</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Payment & Paperwork</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                When we win, you have 2 days to pay the auction invoice via bank transfer directly to the auction or our escrow account. We handle title transfers and export documents.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">4</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Logistics & Shipping</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We dispatch a tow truck to move the car from the auction yard to the nearest port warehouse. It is then loaded into a container and shipped by sea to your destination port (Odessa, Jebel Ali, Bremerhaven, etc.).
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">5</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Customs Clearance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Upon arrival, our partner brokers clear customs, pay duties, and hand the car over to you (or transport it to a local service station if repair is needed).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">Ready to start?</h2>
          <div className="flex justify-center">
            <Link href="/catalog" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg text-lg">
              Browse Available Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
