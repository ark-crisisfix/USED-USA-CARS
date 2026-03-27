export type Locale = "en" | "ru";

export const defaultLocale: Locale = "ru";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}

/** Path without locale prefix (for language switcher). */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  if (pathname === "/ru" || pathname === "/ru/") return "/";
  if (pathname.startsWith("/ru/")) return pathname.slice(3) || "/";
  return pathname;
}

/** Prefix internal links for the active locale. Hash preserved (`/#contact`, `#contact`). */
export function localizePath(path: string, locale: Locale): string {
  const hashIdx = path.indexOf("#");
  const pathPart = hashIdx >= 0 ? path.slice(0, hashIdx) : path;
  const hash = hashIdx >= 0 ? path.slice(hashIdx + 1) : "";
  const base = pathPart === "" && hash ? "/" : pathPart || "/";
  let out: string;

  if (locale === "ru") {
    out = stripLocalePrefix(base);
  } else {
    const bare = stripLocalePrefix(base);
    out = bare === "/" || bare === "" ? "/en" : `/en${bare}`;
  }

  return hash ? `${out}#${hash}` : out;
}

/** Target path when switching locale while staying on the same page. */
export function alternateLocalePath(pathname: string, target: Locale): string {
  const bare = stripLocalePrefix(pathname);
  return localizePath(bare === "/" ? "/" : bare, target);
}
