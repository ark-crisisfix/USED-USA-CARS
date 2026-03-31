import Link from "next/link";
import type { ReadyCar } from "@/lib/types/commerce";
import { conditionDisplay, statusDisplay, titleStatusDisplay } from "@/lib/ready-cars";

export default function ReadyCarCard({
  car,
  hrefPrefix,
  locale,
}: {
  car: ReadyCar;
  /** e.g. "" or "/ru" */
  hrefPrefix: string;
  locale?: "en" | "ru";
}) {
  const base = hrefPrefix || "";
  const detailHref = `${base}/ready-cars/${car.slug}`;
  const mainImage = car.images[0] ?? null;
  const noImageCopy = hrefPrefix === "/ru" ? "Детали по запросу" : "Details available on request";
  const currentLocale = locale ?? (hrefPrefix === "/ru" ? "ru" : "en");

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative h-48 bg-gray-100">
        {mainImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mainImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-gray-500">{noImageCopy}</div>
        )}
        <span className="absolute top-2 left-2 bg-white/95 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">
          {statusDisplay(car.status, currentLocale)}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900">
          {car.year} {car.make} {car.model}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{car.location}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs font-medium bg-slate-100 text-slate-800 px-2 py-0.5 rounded">{titleStatusDisplay(car.title_status, currentLocale)}</span>
          <span className="text-xs font-medium bg-amber-50 text-amber-900 px-2 py-0.5 rounded">{conditionDisplay(car.condition, currentLocale)}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {car.mileage} {car.mileage_unit === "km" ? "km" : "mi"}
        </p>
        <p className="text-xl font-black text-blue-700 mt-2">
          {car.currency} ${car.price.toLocaleString()}
        </p>
        {car.short_note ? <p className="text-sm text-gray-600 mt-2 flex-grow">{car.short_note}</p> : <div className="flex-grow" />}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Link href={detailHref} className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50">
            View Details
          </Link>
          <Link
            href={`${detailHref}#lead`}
            className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Request This Car
          </Link>
        </div>
      </div>
    </article>
  );
}
