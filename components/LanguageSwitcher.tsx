"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateLocalePath, getLocaleFromPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale).switcher;

  return (
    <div
      className="flex items-center rounded-lg border border-gray-200 bg-gray-50 p-0.5 text-sm font-semibold"
      role="navigation"
      aria-label={t.aria}
    >
      <Link
        href={alternateLocalePath(pathname, "en")}
        className={`rounded-md px-2.5 py-1 transition ${
          locale === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
        hrefLang="en"
        lang="en"
      >
        {t.en}
      </Link>
      <Link
        href={alternateLocalePath(pathname, "ru")}
        className={`rounded-md px-2.5 py-1 transition ${
          locale === "ru"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
        hrefLang="ru"
        lang="ru"
      >
        {t.ru}
      </Link>
    </div>
  );
}
