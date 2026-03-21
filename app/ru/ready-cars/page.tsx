import ReadyCarsClient from "@/components/ready-cars/ReadyCarsClient";
import { commerce } from "@/lib/commerceCopy";
import { getAllReadyCars } from "@/lib/ready-cars";
import type { Metadata } from "next";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Авто в наличии — Канада и экспорт"),
  description: "NorthAm Cars: инвентарь в Канаде и экспорт — northamcars.com.",
};

export default function Page() {
  const co = commerce("ru");
  const cars = getAllReadyCars();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{co.readyPageH1}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">{co.readyPageIntro}</p>
        <ReadyCarsClient cars={cars} hrefPrefix="/ru" />
      </div>
    </div>
  );
}
