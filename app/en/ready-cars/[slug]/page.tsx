import { notFound } from "next/navigation";
import ReadyCarDetailPage from "@/components/pages/ReadyCarDetailPage";
import { getReadyCarBySlug, getReadyCarStaticParams } from "@/lib/ready-cars";
import { metaTitlePage, metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export function generateStaticParams() {
  return getReadyCarStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getReadyCarBySlug(slug);
  if (!car) return { title: metaTitlePage("Ready car") };
  return {
    title: metaTitleWithSeoKeywords(`${car.year} ${car.make} ${car.model} — Ready car`),
    description: car.short_note ?? car.description.slice(0, 160),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getReadyCarBySlug(slug);
  if (!car) notFound();
  return <ReadyCarDetailPage car={car} locale="en" />;
}
