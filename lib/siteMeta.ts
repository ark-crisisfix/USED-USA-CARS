/**
 * Публичный бренд — шапка, подвал, контент.
 * Домен продакшена: https://northamcars.com
 */
export const SITE_BRAND = "NorthAm Cars";
export const SITE_URL = "https://northamcars.com";

/**
 * Рабочее SEO-имя (legacy). Не использовать как название компании в UI.
 * Допустимо в <title>, meta description, якорных текстах лендингов /used-cars-usa и т.п.
 */
export const SEO_KEYWORD_BRAND = "Used Cars USA";

/**
 * Стандартный <title>: страница | NorthAm Cars
 */
export function metaTitlePage(primary: string) {
  return `${primary} | ${SITE_BRAND}`;
}

/**
 * <title> с SEO-слоем ключей (legacy фраза в хвосте).
 */
export function metaTitleWithSeoKeywords(primary: string) {
  return `${primary} | ${SITE_BRAND} | ${SEO_KEYWORD_BRAND}`;
}
