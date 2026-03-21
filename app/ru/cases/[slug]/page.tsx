import { notFound } from "next/navigation";
import SavingsCaseDetailPage from "@/components/pages/SavingsCaseDetailPage";
import { getSavingsCaseBySlug, getSavingsCaseStaticParams } from "@/lib/savings-cases";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getSavingsCaseStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getSavingsCaseBySlug(slug);
  if (!c) return { title: "Кейс" };
  return {
    title: `${c.year} ${c.make} ${c.model} — Кейс | Used Cars USA`,
    description: c.summary.slice(0, 160),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getSavingsCaseBySlug(slug);
  if (!c) notFound();
  return <SavingsCaseDetailPage c={c} locale="ru" />;
}
