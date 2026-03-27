"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPath } from "@/lib/i18n";

/** Sets <html lang> for static hosting (no locale segment on <html> from server). */
export default function HtmlLang() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (pathname === "/uk" || pathname.startsWith("/uk/")) {
      document.documentElement.lang = "uk";
      return;
    }

    document.documentElement.lang = getLocaleFromPath(pathname) === "en" ? "en" : "ru";
  }, [pathname]);

  return null;
}
