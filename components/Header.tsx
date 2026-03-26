"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const copy =
    locale === "ru"
      ? {
          auctionListingsLabel: "\u041b\u043e\u0442\u044b",
          partsLabel: "\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438",
          menu: "\u041c\u0435\u043d\u044e",
          close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        }
      : {
          auctionListingsLabel: "Auction Lots",
          partsLabel: "Parts",
          menu: "Menu",
          close: "Close",
        };
  const primaryLinks = [
    { href: "/ready-cars", label: t.readyCars },
    { href: "/cases", label: t.cases },
    { href: "/auction-listings", label: copy.auctionListingsLabel },
    { href: "/calculator", label: t.calculator },
    { href: "/parts-shipping", label: copy.partsLabel },
  ];
  const secondaryLinks = [
    { href: "/export-to-ukraine", label: t.ukraine },
    { href: "/export-to-uae", label: t.uae },
    { href: "/how-it-works", label: t.howItWorks },
    { href: "/catalog", label: t.catalog },
    { href: "/contact", label: t.getQuote },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:min-h-[96px] lg:px-8">
        <Link href={L("/")} className="flex shrink-0 items-center" aria-label={d.site.brand}>
          <Image
            src="/logo-northamcars.svg"
            alt={d.site.brand}
            width={280}
            height={78}
            priority
            className="h-auto w-[220px] sm:w-[250px] lg:w-[270px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={L(link.href)}
              className={`font-medium transition ${
                link.href === "/auction-listings"
                  ? "text-lg text-blue-700 hover:text-blue-800"
                  : "text-lg text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href={L("/contact")}
            className="hidden rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 md:inline-flex"
          >
            {t.getQuote}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? copy.close : copy.menu}
          >
            {menuOpen ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="grid gap-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={L(link.href)}
                  onClick={closeMenu}
                  className="rounded-xl bg-gray-50 px-4 py-3 text-base font-semibold text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-1">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={L(link.href)}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
