import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata = {
  title: 'Used Cars from USA - Buy Direct from Auctions',
  description: 'Learn how to buy cheap used cars from USA auctions (Copart, IAAI). Direct access, huge savings, and full delivery support.',
};

export default function UsedCarsUSAPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Used Cars from USA – Buy Direct from Auctions
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Buying <strong>used cars from USA</strong> has never been easier or more affordable. With direct access to the largest wholesale auto auctions like Copart and IAAI, buyers worldwide can save up to 40% compared to local dealership prices.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Why Buy Cheap Cars from USA?</h2>
              <p>
                The United States auto market is the largest in the world. Millions of vehicles are sold through <strong>car auctions USA</strong> every year. Many of these vehicles have minor damage, theft recovery status, or simply were traded in. This creates an incredible opportunity for international buyers to acquire high-quality vehicles at a fraction of the cost.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Massive Inventory:</strong> Access to over 300,000 cars daily.</li>
                <li><strong>Transparent History:</strong> Full Carfax and AutoCheck reports available.</li>
                <li><strong>Huge Savings:</strong> Typical savings range from 20% to 40% including delivery.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How the Process Works</h2>
              <ol className="list-decimal pl-6 space-y-4 mt-4">
                <li><strong>Selection & Budgeting:</strong> We help you define your budget and select the best lots.</li>
                <li><strong>Auction Bidding:</strong> We bid on your behalf at dealer-only prices.</li>
                <li><strong>Payment & Paperwork:</strong> Secure bank transfer and fast document processing.</li>
                <li><strong>Shipping & Delivery:</strong> We handle land transport to the US port and ocean freight to your destination.</li>
              </ol>

              <div className="bg-blue-50 p-6 rounded-xl mt-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to start?</h3>
                <p className="text-blue-800 mb-4">
                  Browse our catalog or request a free consultation to find your perfect car today.
                </p>
                <Link href="/catalog" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  View Catalog
                </Link>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">Do I need a dealer license?</h4>
                  <p>No, you use our dealer license. We buy the car as a broker and transfer ownership directly to you.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">How much is the shipping?</h4>
                  <p>Shipping costs vary by location. Use our calculator for an exact estimate, but typically ocean freight ranges from $1,000 to $1,800.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <LeadForm title="Get a Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
