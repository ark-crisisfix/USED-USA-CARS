import { notFound } from "next/navigation";
import SavingsCaseDetailPage from "@/components/pages/SavingsCaseDetailPage";
import { getSavingsCaseBySlug, getSavingsCaseStaticParams } from "@/lib/savings-cases";
import { metaTitlePage, metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export function generateStaticParams() {
  return getSavingsCaseStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getSavingsCaseBySlug(slug);
  if (!c) return { title: metaTitlePage("Case") };
  return {
    title: metaTitleWithSeoKeywords(`${c.year} ${c.make} ${c.model} — Purchase case`),
    description: c.summary.slice(0, 160),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getSavingsCaseBySlug(slug);
  if (!c) notFound();
  return <SavingsCaseDetailPage c={c} locale="en" />;
}
