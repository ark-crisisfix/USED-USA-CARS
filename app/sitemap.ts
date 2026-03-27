import type { MetadataRoute } from "next";
import { seoGuides } from "@/data/seo-guides";
import { SITE_URL } from "@/lib/siteMeta";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/calculator",
  "/catalog",
  "/contact",
  "/pricing",
  "/how-it-works",
  "/cases",
  "/ready-cars",
  "/used-cars-usa",
  "/used-cars-canada",
  "/export-to-ukraine",
  "/export-to-uae",
  "/export-to-poland",
  "/export-to-baltics",
  "/guides",
  "/auction-listings",
  "/auction-picks",
  "/parts-shipping",
  "/en",
  "/en/calculator",
  "/en/catalog",
  "/en/contact",
  "/en/pricing",
  "/en/how-it-works",
  "/en/cases",
  "/en/ready-cars",
  "/en/used-cars-usa",
  "/en/used-cars-canada",
  "/en/export-to-ukraine",
  "/en/export-to-uae",
  "/en/export-to-poland",
  "/en/export-to-baltics",
  "/en/guides",
  "/en/auction-listings",
  "/en/auction-picks",
  "/en/parts-shipping",
  "/uk/guides",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = seoGuides.flatMap((guide) => [
    `/guides/${guide.slug}`,
    `/en/guides/${guide.slug}`,
    `/uk/guides/${guide.slug}`,
  ]);

  return [...staticRoutes, ...guideRoutes].map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date("2026-03-27"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.includes("/guides/") ? 0.8 : 0.7,
  }));
}
