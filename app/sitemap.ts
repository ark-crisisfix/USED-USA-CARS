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
  "/ru",
  "/ru/calculator",
  "/ru/catalog",
  "/ru/contact",
  "/ru/pricing",
  "/ru/how-it-works",
  "/ru/cases",
  "/ru/ready-cars",
  "/ru/used-cars-usa",
  "/ru/used-cars-canada",
  "/ru/export-to-ukraine",
  "/ru/export-to-uae",
  "/ru/export-to-poland",
  "/ru/export-to-baltics",
  "/ru/guides",
  "/ru/auction-listings",
  "/ru/auction-picks",
  "/uk/guides",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = seoGuides.flatMap((guide) => [
    `/guides/${guide.slug}`,
    `/ru/guides/${guide.slug}`,
    `/uk/guides/${guide.slug}`,
  ]);

  return [...staticRoutes, ...guideRoutes].map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date("2026-03-23"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.includes("/guides/") ? 0.8 : 0.7,
  }));
}
