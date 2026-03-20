import Link from "next/link";
import cars from "@/data/cars.json";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function CatalogPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).catalog;
  const c = getDictionary(locale).common;
  const L = (path: string) => localizePath(path, locale);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">{t.subtitle}</p>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 bg-white p-6 rounded-xl shadow-sm h-fit">
            <h2 className="font-bold text-lg mb-4">{c.filters}</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{c.make}</label>
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border">
                  <option>{c.allMakes}</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Tesla</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{c.maxPrice}</label>
                <input type="range" min="1000" max="50000" className="w-full" />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                {c.applyFilters}
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div
                  key={car.lot_id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {t.lot}
                      {car.lot_id}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-gray-500 mb-1">
                      {car.year} • {car.mileage} {c.mi}
                    </div>
                    <h3 className="text-lg font-bold mb-3">
                      {car.make} {car.model}
                    </h3>
                    <div className="space-y-1 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{c.damage}</span>
                        <span className="font-medium text-gray-800">{car.damage}</span>
                      </div>
                      <div className="flex justify-between text-blue-700 font-semibold">
                        <span>{c.auction}</span>
                        <span>${car.auction_price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 font-bold border-t border-gray-100 pt-2 mt-2">
                        <span>{c.totalEst}</span>
                        <span>${car.estimated_total.toLocaleString()}</span>
                      </div>
                    </div>
                    <Link
                      href={L(`/car/${car.lot_id}`)}
                      className="block w-full text-center bg-gray-50 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg transition text-sm"
                    >
                      {c.details}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
