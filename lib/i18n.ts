export type Locale = 'en' | 'ru'

export const defaultLocale: Locale = 'en'

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/ru' || pathname.startsWith('/ru/') ? 'ru' : 'en'
}

/** Path without /ru prefix (for language switcher). */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/ru' || pathname === '/ru/') return '/'
  if (pathname.startsWith('/ru/')) return pathname.slice(3) || '/'
  return pathname
}

/** Prefix internal links for the active locale. Hash preserved (`/#contact`, `#contact`). */
export function localizePath(path: string, locale: Locale): string {
  const hashIdx = path.indexOf('#')
  const pathPart = hashIdx >= 0 ? path.slice(0, hashIdx) : path
  const hash = hashIdx >= 0 ? path.slice(hashIdx + 1) : ''
  const base = pathPart === '' && hash ? '/' : pathPart || '/'
  let out: string
  if (locale === 'en') {
    out = base.startsWith('/ru') ? stripLocalePrefix(base) : base
  } else {
    if (base === '/' || base === '') out = '/ru'
    else if (base.startsWith('/ru')) out = base
    else out = `/ru${base}`
  }
  return hash ? `${out}#${hash}` : out
}

/** Target path when switching locale while staying on the “same” page. */
export function alternateLocalePath(pathname: string, target: Locale): string {
  const bare = stripLocalePrefix(pathname)
  return localizePath(bare === '/' ? '/' : bare, target)
}
