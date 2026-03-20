import LeadForm from '@/components/LeadForm';
import Link from 'next/link';

export const metadata = {
  title: 'Used Cars from Canada - Direct Auction Access',
  description: 'Buy cheap used cars from Canadian auto auctions. Metric dashboards, winter-ready vehicles, and direct export services.',
};

export default function UsedCarsCanadaPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Used Cars from Canada – Buy Direct from Auctions
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Importing <strong>used cars from Canada</strong> is a hidden gem for many international buyers. With a strong currency exchange rate and excellent vehicle maintenance standards, Canadian auctions offer unique advantages.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Why Choose Canadian Cars?</h2>
              <p>
                While the US market is larger, the Canadian market offers specific benefits. Many cars come with metric dashboards (km/h and Celsius), making them perfectly suited for European and Middle Eastern markets without costly conversions.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Metric System Standard:</strong> No need to convert speedometers or climate controls.</li>
                <li><strong>Winter Ready:</strong> Often equipped with block heaters, heated seats, and rust protection.</li>
                <li><strong>Favorable Exchange Rates:</strong> The CAD to USD exchange often means built-in savings.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How to Export from Canada</h2>
              <ol className="list-decimal pl-6 space-y-4 mt-4">
                <li><strong>Select from Copart/Impact:</strong> We bid on Canadian inventory.</li>
                <li><strong>Cross-Border Transport:</strong> We arrange land transport to the nearest US port, or ship directly from Montreal/Halifax.</li>
                <li><strong>Customs Clearance:</strong> Handling both Canadian export and destination import docs.</li>
              </ol>

              <div className="bg-blue-50 p-6 rounded-xl mt-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to explore Canadian inventory?</h3>
                <p className="text-blue-800 mb-4">
                  Let us find the perfect metric-standard vehicle for your market.
                </p>
                <Link href="/catalog" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  View Catalog
                </Link>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">Is shipping more expensive from Canada?</h4>
                  <p>Often it is comparable. We consolidate freight and use strategic ports like Montreal or New York to keep costs low.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Are Canadian titles different?</h4>
                  <p>Yes, but they function similarly for export purposes. We ensure you get clean exportable documents.</p>
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
