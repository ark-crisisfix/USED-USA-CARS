import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import cars from '@/data/cars.json';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Used Cars from USA – Save Up to 40%
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Direct from auctions (Copart, IAAI) with full delivery to Ukraine and UAE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contact" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg">
              Find My Car
            </Link>
            <Link href="/catalog" className="bg-blue-700 text-white border border-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition shadow-lg text-lg">
              Browse Cars
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST */}
      <section className="py-12 px-4 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
            <div className="text-lg font-semibold text-gray-800">Cars Sourced</div>
            <p className="text-gray-500 mt-2">Delivered successfully worldwide.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-emerald-600 mb-2">20–40%</div>
            <div className="text-lg font-semibold text-gray-800">Average Savings</div>
            <p className="text-gray-500 mt-2">Compared to local dealership prices.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-amber-500 mb-2">4–10</div>
            <div className="text-lg font-semibold text-gray-800">Weeks Delivery</div>
            <p className="text-gray-500 mt-2">Fast and secure shipping pipeline.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE PROPOSITION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Buy Through Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Direct Auction Access</h3>
              <p className="text-gray-600 leading-relaxed">
                We buy directly from Copart and IAAI, bypassing middlemen. You get real dealer prices and full history reports.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center text-emerald-600 text-2xl mb-6">💎</div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees. We show exactly what the car costs, our commission, and the delivery price upfront.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center text-amber-600 text-2xl mb-6">🚢</div>
              <h3 className="text-xl font-bold mb-3">Worldwide Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle land transport in the US, ocean freight, customs clearance, and delivery to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED CARS */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Cars</h2>
              <p className="text-gray-600 mt-2">Recently bought for our clients</p>
            </div>
            <Link href="/catalog" className="hidden sm:inline-block text-blue-600 font-semibold hover:underline">
              View All Cars →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.lot_id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{car.year} • {car.mileage} mi</div>
                  <h3 className="text-xl font-bold mb-4">{car.make} {car.model}</h3>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Damage:</span>
                      <span className="font-medium">{car.damage}</span>
                    </div>
                    <div className="flex justify-between text-blue-700 font-semibold">
                      <span>Auction Price:</span>
                      <span>${car.auction_price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 font-bold border-t pt-2 mt-2">
                      <span>Estimated Total:</span>
                      <span>${car.estimated_total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link href={`/car/${car.lot_id}`} className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/catalog" className="text-blue-600 font-semibold hover:underline">
              View All Cars →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: DESTINATIONS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/export-to-ukraine" className="group relative rounded-2xl overflow-hidden block h-80 bg-blue-900 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/1e3a8a/white?text=Odessa+Port" alt="Delivery to Ukraine" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">Ukraine</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">Delivery to Odessa / European ports, customs clearance, and local certification.</p>
                <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-blue-500 transition">View Terms</span>
              </div>
            </Link>
            <Link href="/export-to-uae" className="group relative rounded-2xl overflow-hidden block h-80 bg-amber-900 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/78350f/white?text=Dubai+Skyline" alt="Delivery to UAE" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">UAE</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">Jebel Ali delivery, clean title focus, ready-to-drive solutions for Dubai and beyond.</p>
                <span className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-amber-500 transition">View Terms</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALCULATOR PREVIEW */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Calculate Total Cost Instantly</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Input the auction price and destination to see all taxes, delivery fees, and our commission in real-time.
          </p>
          <Link href="/calculator" className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg">
            Open Cost Calculator
          </Link>
        </div>
      </section>

      {/* SECTION 7: LEAD FORM */}
      <section id="contact" className="py-24 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your perfect car?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Leave your details, and our expert will contact you to discuss your requirements, budget, and pick the best auction lots for you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span> Free consultation
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span> Lot history check
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span> Precise cost estimation
              </li>
            </ul>
          </div>
          <div>
            <LeadForm title="Get a Free Estimate" />
          </div>
        </div>
      </section>
    </div>
  );
}
