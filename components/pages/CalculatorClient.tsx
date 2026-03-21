"use client";

import { useState } from "react";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function CalculatorClient({ locale }: { locale: Locale }) {
  const tc = getDictionary(locale).calculator;
  const lf = getDictionary(locale).leadForm;
  const [budget, setBudget] = useState(10000);
  const [destination, setDestination] = useState("ukraine");
  const [carType, setCarType] = useState("sedan");

  const auctionFee = Math.round(budget * 0.1);
  const landShipping = 450;
  const oceanShipping = destination === "ukraine" ? 1200 : 1500;
  const serviceFee = 500;
  const customs = destination === "ukraine" ? Math.round(budget * 0.35) : Math.round(budget * 0.05);
  const total = budget + auctionFee + landShipping + oceanShipping + serviceFee + customs;
  const destPref = destination === "ukraine" ? "Ukraine" : "UAE";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{tc.title}</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">{tc.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold mb-6">{tc.inputTitle}</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tc.auctionPriceLabel} ${budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$1k</span>
                  <span>$50k</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{tc.destination}</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="ukraine">{lf.ukraine}</option>
                  <option value="uae">
                    {lf.uae}
                    {tc.uaeDubai}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{tc.carType}</label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setCarType("sedan")}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${
                      carType === "sedan" ? "bg-blue-50 border-blue-500 text-blue-700" : "hover:bg-gray-50"
                    }`}
                  >
                    {tc.sedan}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarType("suv")}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${
                      carType === "suv" ? "bg-blue-50 border-blue-500 text-blue-700" : "hover:bg-gray-50"
                    }`}
                  >
                    {tc.suv}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarType("truck")}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${
                      carType === "truck" ? "bg-blue-50 border-blue-500 text-blue-700" : "hover:bg-gray-50"
                    }`}
                  >
                    {tc.truck}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl" />

            <h2 className="text-2xl font-bold mb-6 relative z-10">{tc.breakdown}</h2>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.bid}</span>
                <span className="font-semibold text-lg">${budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.auctionFees}</span>
                <span className="font-medium">${auctionFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.land}</span>
                <span className="font-medium">${landShipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.ocean}</span>
                <span className="font-medium">${oceanShipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.broker}</span>
                <span className="font-medium">${serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">{tc.customs}</span>
                <span className="font-medium">${customs.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center pt-4 mt-4">
                <span className="text-xl font-bold">{tc.total}</span>
                <span className="text-3xl font-black text-emerald-400">${total.toLocaleString()}</span>
              </div>

              <p className="text-xs text-gray-500 mt-6 text-center">{tc.disclaimer}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-6 text-blue-900">{tc.leadTitle}</h3>
            <LeadFormUniversal
              heading={tc.leadTitle}
              formType="calculator"
              destinationPrefill={destPref}
              sourceContext={`calculator:${destination}:${carType}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
