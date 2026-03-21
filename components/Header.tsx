"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale).nav;
  const L = (path: string) => localizePath(path, locale);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href={L("/")} className="font-bold text-2xl text-blue-600 shrink-0">
          Used Cars USA
        </Link>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href={L("/catalog")} className="text-gray-600 hover:text-blue-600 font-medium">
            {t.catalog}
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
