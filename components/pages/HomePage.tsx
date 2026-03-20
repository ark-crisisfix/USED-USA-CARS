import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import cars from "@/data/cars.json";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home;
  const c = getDictionary(locale).common;
  const L = (path: string) => localizePath(path, locale);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">{t.heroSub}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={L("/#contact")}
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg"
            >
              {t.findMyCar}
            </Link>
            <Link
              href={L("/catalog")}
              className="bg-blue-700 text-white border border-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition shadow-lg text-lg"
            >
              {t.browseCars}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustCars}</div>
            <p className="text-gray-500 mt-2">{t.trustCarsSub}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-emerald-600 mb-2">20–40%</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustSave}</div>
            <p className="text-gray-500 mt-2">{t.trustSaveSub}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-black text-amber-500 mb-2">4–10</div>
            <div className="text-lg font-semibold text-gray-800">{t.trustDelivery}</div>
            <p className="text-gray-500 mt-2">{t.trustDeliverySub}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.valueTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                🏛️
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v1t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v1b}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center text-emerald-600 text-2xl mb-6">
                💎
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v2t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v2b}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center text-amber-600 text-2xl mb-6">
                🚢
              </div>
              <h3 className="text-xl font-bold mb-3">{t.v3t}</h3>
              <p className="text-gray-600 leading-relaxed">{t.v3b}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">{t.featuredTitle}</h2>
              <p className="text-gray-600 mt-2">{t.featuredSub}</p>
            </div>
            <Link href={L("/catalog")} className="hidden sm:inline-block text-blue-600 font-semibold hover:underline">
              {c.viewAllCars}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.lot_id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">
                    {car.year} • {car.mileage} {c.mi}
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {car.make} {car.model}
                  </h3>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{c.damage}</span>
                      <span className="font-medium">{car.damage}</span>
                    </div>
                    <div className="flex justify-between text-blue-700 font-semibold">
                      <span>{c.auctionPrice}</span>
                      <span>${car.auction_price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 font-bold border-t pt-2 mt-2">
                      <span>{c.estimatedTotal}</span>
                      <span>${car.estimated_total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link
                    href={L(`/car/${car.lot_id}`)}
                    className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition"
                  >
                    {c.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href={L("/catalog")} className="text-blue-600 font-semibold hover:underline">
              {c.viewAllCars}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t.destTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href={L("/export-to-ukraine")}
              className="group relative rounded-2xl overflow-hidden block h-80 bg-blue-900 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/800x600/1e3a8a/white?text=Odessa+Port"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">{t.uaTitle}</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">{t.uaSub}</p>
                <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-blue-500 transition">
                  {t.uaCta}
                </span>
              </div>
            </Link>
            <Link
              href={L("/export-to-uae")}
              className="group relative rounded-2xl overflow-hidden block h-80 bg-amber-900 shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/800x600/78350f/white?text=Dubai+Skyline"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-4xl font-bold mb-4">{t.uaeTitle}</h3>
                <p className="text-lg max-w-sm mx-auto mb-6">{t.uaeSub}</p>
                <span className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-amber-500 transition">
                  {t.uaCta}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.calcTitle}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{t.calcSub}</p>
          <Link
            href={L("/calculator")}
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg"
          >
            {t.calcCta}
          </Link>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.leadTitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{t.leadSub}</p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB1}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB2}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-3 text-xl">✓</span>
                {t.leadB3}
              </li>
            </ul>
          </div>
          <div>
            <LeadForm title={t.leadFormTitle} />
          </div>
        </div>
      </section>
    </div>
  );
}
