"use client";

import { useMemo, useState } from "react";
import type { ReadyCar } from "@/lib/types/commerce";
import ReadyCarCard from "./ReadyCarCard";

type LocFilter = "all" | "canada" | "ready_to_ship" | "in_transit" | "export";
type SortKey = "newest" | "price_asc" | "price_desc" | "ready_first";

function matchesLocation(car: ReadyCar, f: LocFilter): boolean {
  if (f === "all") return true;
  if (f === "canada") return car.destination_tags.includes("canada");
  if (f === "ready_to_ship") return car.status === "ready_to_ship";
  if (f === "in_transit") return car.status === "in_transit";
  if (f === "export") return car.destination_tags.some((t) => t === "ukraine" || t === "uae" || t === "worldwide");
  return true;
}

function readyScore(car: ReadyCar): number {
  if (car.is_sold || car.status === "sold") return -10;
  if (car.status === "available") return 4;
  if (car.status === "ready_to_ship") return 3;
  if (car.status === "in_transit") return 2;
  if (car.status === "reserved") return 1;
  return 0;
}

export default function ReadyCarsClient({
  cars,
  hrefPrefix,
}: {
  cars: ReadyCar[];
  hrefPrefix: string;
}) {
  const makes = useMemo(() => [...new Set(cars.map((c) => c.make))].sort(), [cars]);
  const models = useMemo(() => [...new Set(cars.map((c) => c.model))].sort(), [cars]);

  const [loc, setLoc] = useState<LocFilter>("all");
  const [condition, setCondition] = useState<string>("all");
  const [make, setMake] = useState<string>("all");
  const [model, setModel] = useState<string>("all");
  const [priceMax, setPriceMax] = useState<string>("all");
  const [dest, setDest] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("ready_first");

  const filtered = useMemo(() => {
    let list = cars.filter((c) => matchesLocation(c, loc));
    if (condition !== "all") list = list.filter((c) => c.condition === condition);
    if (make !== "all") list = list.filter((c) => c.make === make);
    if (model !== "all") list = list.filter((c) => c.model === model);
    if (dest !== "all") list = list.filter((c) => c.destination_tags.includes(dest as "canada" | "ukraine" | "uae" | "worldwide"));
    if (priceMax !== "all") {
      const max = Number(priceMax);
      list = list.filter((c) => c.price <= max);
    }

    const sorted = [...list];
    if (sort === "newest") {
      sorted.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    } else if (sort === "price_asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => {
        const rs = readyScore(b) - readyScore(a);
        if (rs !== 0) return rs;
        return a.created_at < b.created_at ? 1 : -1;
      });
    }
    return sorted;
  }, [cars, loc, condition, make, model, priceMax, dest, sort]);

  const field =
    "w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Location</label>
            <select className={field} value={loc} onChange={(e) => setLoc(e.target.value as LocFilter)}>
              <option value="all">All</option>
              <option value="canada">Canada</option>
              <option value="ready_to_ship">Ready to Ship</option>
              <option value="in_transit">In Transit</option>
              <option value="export">Worldwide Export</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Condition</label>
            <select className={field} value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="all">All</option>
              <option value="clean">Clean</option>
              <option value="salvage">Salvage</option>
              <option value="repaired">Repaired</option>
              <option value="as_is">As Is</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Make</label>
            <select className={field} value={make} onChange={(e) => { setMake(e.target.value); setModel("all"); }}>
              <option value="all">All makes</option>
              {makes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Model</label>
            <select className={field} value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="all">All models</option>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Max price ({cars[0]?.currency ?? "CAD"})</label>
            <select className={field} value={priceMax} onChange={(e) => setPriceMax(e.target.value)}>
              <option value="all">Any</option>
              <option value="30000">Up to 30,000</option>
              <option value="40000">Up to 40,000</option>
              <option value="50000">Up to 50,000</option>
              <option value="75000">Up to 75,000</option>
              <option value="100000">Up to 100,000</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Destination suitability</label>
            <select className={field} value={dest} onChange={(e) => setDest(e.target.value)}>
              <option value="all">Any</option>
              <option value="canada">Canada</option>
              <option value="ukraine">Ukraine</option>
              <option value="uae">UAE</option>
              <option value="worldwide">Worldwide</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Sort</label>
            <select className={field} value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="ready_first">Ready first</option>
              <option value="newest">Newest</option>
              <option value="price_asc">Price: low to high</option>
              <option value="price_desc">Price: high to low</option>
            </select>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Showing <strong>{filtered.length}</strong> of {cars.length} vehicles
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-600 py-12">No vehicles match these filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <ReadyCarCard key={car.id} car={car} hrefPrefix={hrefPrefix} />
          ))}
        </div>
      )}
    </div>
  );
}
