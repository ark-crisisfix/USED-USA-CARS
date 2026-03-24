"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const d = getDictionary(locale);
  const t = d.nav;
  const L = (path: string) => localizePath(path, locale);
  const auctionListingsLabel = locale === "ru" ? "Лоты" : "Auction Lots";
  const auctionListingsBarTitle =
    locale === "ru" ? "Хотите сами выбрать лот?" : "Want to shortlist lots yourself?";
  const auctionListingsBarBody =
    locale === "ru"
      ? "Откройте актуальные площадки и пришлите нам ссылку или номер лота на расчет."
      : "Open live listing sites and send us the lot link or number for review.";
  const auctionListingsBarCta = locale === "ru" ? "Открыть лоты" : "Browse Lots";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{auctionListingsBarTitle}</div>
            <div className="text-sm text-slate-600">{auctionListingsBarBody}</div>
          </div>
          <Link
            href={L("/auction-listings")}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {auctionListingsBarCta}
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href={L("/")} className="font-bold text-2xl text-blue-600 shrink-0">
          {d.site.brand}
        </Link>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href={L("/catalog")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.catalog}
          </Link>
          <Link href={L("/auction-listings")} className="text-blue-700 hover:text-blue-800 font-semibold">
            {auctionListingsLabel}
          </Link>
          <Link href={L("/ready-cars")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.readyCars}
          </Link>
          <Link href={L("/cases")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.cases}
          </Link>
          <Link href={L("/export-to-ukraine")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.ukraine}
          </Link>
          <Link href={L("/export-to-uae")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.uae}
          </Link>
          <Link href={L("/calculator")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.calculator}
          </Link>
          <Link href={L("/how-it-works")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.howItWorks}
          </Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <Link
            href={L("/contact")}
            className="hidden lg:inline-flex bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {t.getQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
