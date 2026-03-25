"use client";

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
          topTitle: "\u0425\u043e\u0442\u0438\u0442\u0435 \u0441\u0430\u043c\u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043b\u043e\u0442?",
          topBody:
            "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u0438 \u043f\u0440\u0438\u0448\u043b\u0438\u0442\u0435 \u043d\u0430\u043c \u0441\u0441\u044b\u043b\u043a\u0443 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u043b\u043e\u0442\u0430 \u043d\u0430 \u0440\u0430\u0441\u0447\u0435\u0442.",
          topCta: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043b\u043e\u0442\u044b",
          menu: "\u041c\u0435\u043d\u044e",
          close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        }
      : {
          auctionListingsLabel: "Auction Lots",
          partsLabel: "Parts",
          topTitle: "Want to shortlist lots yourself?",
          topBody: "Open live listing sites and send us the lot link or number for review.",
          topCta: "Browse Lots",
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
      <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{copy.topTitle}</div>
            <div className="text-sm text-slate-600">{copy.topBody}</div>
          </div>
          <Link
            href={L("/auction-listings")}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {copy.topCta}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={L("/")} className="shrink-0 text-2xl font-bold text-blue-600">
          {d.site.brand}
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={L(link.href)}
              className={`font-medium transition ${
                link.href === "/auction-listings" ? "text-blue-700 hover:text-blue-800" : "text-gray-600 hover:text-blue-600"
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
