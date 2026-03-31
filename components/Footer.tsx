"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale).footer;
  const auctionListingsLabel = locale === "ru" ? "Площадки с лотами" : "Auction Listings";
  const auctionPicksLabel = locale === "ru" ? "Лучшие лоты недели" : "Auction Picks";
  const partsLabel = locale === "ru" ? "Запчасти и отправка" : "Parts Shipping";
  const disclaimer =
    locale === "ru"
      ? "Все цены, пошлины и сроки доставки, указанные на сайте, являются ориентировочными и могут изменяться в зависимости от состояния автомобиля, результатов аукциона, маршрута доставки, работы портов, таможенного оформления и изменений законодательства."
      : "All prices, duties, and delivery timelines shown on this site are estimates only and may vary based on vehicle condition, auction result, shipping route, port schedules, customs processing, and regulatory changes.";
  const L = (path: string) => localizePath(path, locale);
  const y = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t.brand}</h3>
            <p className="text-gray-400">{t.tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={L("/catalog")} className="hover:text-white transition">
                  {t.auctionCatalog}
                </Link>
              </li>
              <li>
                <Link href={L("/export-to-ukraine")} className="hover:text-white transition">
                  {t.deliveryUa}
                </Link>
              </li>
              <li>
                <Link href={L("/export-to-uae")} className="hover:text-white transition">
                  {t.deliveryUae}
                </Link>
              </li>
              <li>
                <Link href={L("/export-to-poland")} className="hover:text-white transition">
                  {t.deliveryPoland}
                </Link>
              </li>
              <li>
                <Link href={L("/export-to-baltics")} className="hover:text-white transition">
                  {t.deliveryBaltics}
                </Link>
              </li>
              <li>
                <Link href={L("/calculator")} className="hover:text-white transition">
                  {t.costCalculator}
                </Link>
              </li>
              <li>
                <Link href={L("/guides")} className="hover:text-white transition">
                  {t.guides}
                </Link>
              </li>
              <li>
                <Link href={L("/auction-listings")} className="hover:text-white transition">
                  {auctionListingsLabel}
                </Link>
              </li>
              <li>
                <Link href={L("/auction-picks")} className="hover:text-white transition">
                  {auctionPicksLabel}
                </Link>
              </li>
              <li>
                <Link href={L("/parts-shipping")} className="hover:text-white transition">
                  {partsLabel}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={L("/how-it-works")} className="hover:text-white transition">
                  {t.howItWorks}
                </Link>
              </li>
              <li>
                <Link href={L("/pricing")} className="hover:text-white transition">
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link href={L("/cases")} className="hover:text-white transition">
                  {t.casesReviews}
                </Link>
              </li>
              <li>
                <Link href={L("/contact")} className="hover:text-white transition">
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.seo}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={L("/used-cars-usa")} className="hover:text-white transition">
                  {t.usedCarsUsa}
                </Link>
              </li>
              <li>
                <Link href={L("/used-cars-canada")} className="hover:text-white transition">
                  {t.usedCarsCanada}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p className="mx-auto mb-4 max-w-4xl text-sm leading-6 text-gray-400">{disclaimer}</p>
          <p>
            &copy; {y} {t.brand}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
