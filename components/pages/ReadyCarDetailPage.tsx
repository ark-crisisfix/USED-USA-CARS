import LeadFormUniversal from "@/components/LeadFormUniversal";
import ReadyCarGallery from "@/components/ready-cars/ReadyCarGallery";
import { commerce } from "@/lib/commerceCopy";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import type { ReadyCar } from "@/lib/types/commerce";
import { conditionDisplay, statusDisplay, titleStatusDisplay } from "@/lib/ready-cars";
import Link from "next/link";

export default function ReadyCarDetailPage({ car, locale }: { car: ReadyCar; locale: Locale }) {
  const co = commerce(locale);
  const t = getDictionary(locale).common;
  const L = (path: string) => localizePath(path, locale);
  const title = `${car.year} ${car.make} ${car.model}`;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={L("/")} className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={L("/ready-cars")} className="hover:text-blue-600">
            {co.readyViewAll}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ReadyCarGallery images={car.images} altBase={title} />

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Vehicle summary</h2>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <dt className="text-gray-500">Year</dt>
                <dd className="font-semibold">{car.year}</dd>
                <dt className="text-gray-500">Make</dt>
                <dd className="font-semibold">{car.make}</dd>
                <dt className="text-gray-500">Model</dt>
                <dd className="font-semibold">{car.model}</dd>
                <dt className="text-gray-500">Mileage</dt>
                <dd className="font-semibold">
                  {car.mileage} {car.mileage_unit === "km" ? "km" : t.mi}
                </dd>
                <dt className="text-gray-500">Condition</dt>
                <dd className="font-semibold">{conditionDisplay(car.condition)}</dd>
                <dt className="text-gray-500">Title</dt>
                <dd className="font-semibold">{titleStatusDisplay(car.title_status)}</dd>
                <dt className="text-gray-500">Location</dt>
                <dd className="font-semibold">{car.location}</dd>
                <dt className="text-gray-500">Availability</dt>
                <dd className="font-semibold">{statusDisplay(car.status)}</dd>
              </dl>
              {car.vin_last6 ? (
                <p className="text-xs text-gray-500 mt-4">VIN (last 6): …{car.vin_last6}</p>
              ) : null}
              {(car.engine || car.drivetrain || car.fuel_type) && (
                <p className="text-xs text-gray-600 mt-2">
                  {[car.engine, car.drivetrain, car.fuel_type].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Pricing</h2>
              <p className="text-3xl font-black text-blue-700">
                {car.currency} ${car.price.toLocaleString()}
              </p>
              {car.price_note ? <p className="text-sm text-gray-600 mt-2">{car.price_note}</p> : null}
              <p className="text-sm text-gray-500 mt-3">Export costs are calculated separately depending on destination.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Best use</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className={car.best_for?.canada_local ? "font-semibold text-gray-900" : "text-gray-400"}>
                  {car.best_for?.canada_local ? "✓ " : "○ "}Recommended for Canada local sale
                </li>
                <li className={car.best_for?.ukraine_repair ? "font-semibold text-gray-900" : "text-gray-400"}>
                  {car.best_for?.ukraine_repair ? "✓ " : "○ "}Recommended for Ukraine repair / import
                </li>
                <li className={car.best_for?.uae_export ? "font-semibold text-gray-900" : "text-gray-400"}>
                  {car.best_for?.uae_export ? "✓ " : "○ "}Recommended for UAE clean-title export
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{car.description}</p>
        </div>

        {car.logistics_note ? (
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800">
            <strong>Logistics:</strong> {car.logistics_note}
          </div>
        ) : null}

        <div className="mt-10 flex flex-col sm:flex-row gap-3" id="actions">
          <a
            href="#lead"
            className="flex-1 text-center py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Request this car
          </a>
          <Link href={L("/catalog")} className="flex-1 text-center py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50">
            Get similar options
          </Link>
          <Link href={L("/contact")} className="flex-1 text-center py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50">
            Ask about shipping
          </Link>
        </div>

        <section id="lead" className="mt-14 scroll-mt-24">
          <LeadFormUniversal
            heading="Request this car"
            subtitle={`Reference: ${title} (ID ${car.id})`}
            formType="ready_car"
            readyCarReferenceId={car.id}
            sourceContext={`ready_car:${car.slug}`}
            submitButtonText="Request This Car"
            preferredVehicleInitial={`${car.year} ${car.make} ${car.model}`}
          />
        </section>
      </div>
    </div>
  );
}
