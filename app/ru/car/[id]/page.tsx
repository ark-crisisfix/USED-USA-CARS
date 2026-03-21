import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CarDetailPage from "@/components/pages/CarDetailPage";
import cars from "@/data/cars.json";
import { carRouteStaticParams } from "@/lib/carStaticParams";
import { metaTitlePage, metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export function generateStaticParams() {
  return carRouteStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const car = cars.find((c) => c.lot_id === id);
  if (!car) return { title: metaTitlePage("Лот на аукционе") };
  return {
    title: metaTitleWithSeoKeywords(`${car.year} ${car.make} ${car.model} — лот`),
    description: `Лот ${car.lot_id}: ${car.make} ${car.model}. NorthAm Cars — northamcars.com.`,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.lot_id === id);
  if (!car) notFound();
  return <CarDetailPage car={car} locale="ru" />;
}
