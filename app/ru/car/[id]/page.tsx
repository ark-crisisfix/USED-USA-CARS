import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CarDetailPage from "@/components/pages/CarDetailPage";
import cars from "@/data/cars.json";
import { carRouteStaticParams } from "@/lib/carStaticParams";

export function generateStaticParams() {
  return carRouteStaticParams();
}

export const metadata: Metadata = {
  title: "Лот на аукционе | Used Cars USA",
  description: "Карточка авто: цена на аукционе, доставка, заявка на выкуп.",
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.lot_id === id);
  if (!car) notFound();
  return <CarDetailPage car={car} locale="ru" />;
}
