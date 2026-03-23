import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoGuideArticlePage from "@/components/pages/SeoGuideArticlePage";
import { getSeoGuide, seoGuides } from "@/data/seo-guides";
import { metaTitleWithSeoKeywords, SITE_URL } from "@/lib/siteMeta";

export function generateStaticParams() {
  return seoGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSeoGuide(slug);
  if (!guide) return {};

  return {
    title: metaTitleWithSeoKeywords(guide.title.uk),
    description: guide.description.uk,
    alternates: {
      canonical: `${SITE_URL}/uk/guides/${guide.slug}`,
      languages: {
        en: `${SITE_URL}/guides/${guide.slug}`,
        ru: `${SITE_URL}/ru/guides/${guide.slug}`,
        uk: `${SITE_URL}/uk/guides/${guide.slug}`,
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getSeoGuide(slug);
  if (!guide) notFound();
  return <SeoGuideArticlePage locale="uk" guide={guide} />;
}
