"use client";

import { useState } from 'react';
import LeadForm from '@/components/LeadForm';

export default function CalculatorPage() {
  const [budget, setBudget] = useState(10000);
  const [destination, setDestination] = useState('ukraine');
  const [carType, setCarType] = useState('sedan');

  // Basic mock calculation logic
  const auctionFee = Math.round(budget * 0.1); // 10% average fee
  const landShipping = 450;
  const oceanShipping = destination === 'ukraine' ? 1200 : 1500;
  const serviceFee = 500;
  const customs = destination === 'ukraine' ? Math.round(budget * 0.35) : Math.round(budget * 0.05);
  
  const total = budget + auctionFee + landShipping + oceanShipping + serviceFee + customs;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Delivery Cost Calculator</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Estimate the total cost of buying a car from US auctions including delivery and customs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold mb-6">Input Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auction Price (Winning Bid): ${budget.toLocaleString()}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="ukraine">Ukraine</option>
                  <option value="uae">UAE (Dubai)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
                <div className="grid grid-cols-3 gap-4">
                  <button 
                    onClick={() => setCarType('sedan')}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${carType === 'sedan' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'hover:bg-gray-50'}`}
                  >
                    Sedan
                  </button>
                  <button 
                    onClick={() => setCarType('suv')}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${carType === 'suv' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'hover:bg-gray-50'}`}
                  >
                    SUV
                  </button>
                  <button 
                    onClick={() => setCarType('truck')}
                    className={`p-3 border rounded-lg text-sm font-medium transition ${carType === 'truck' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'hover:bg-gray-50'}`}
                  >
                    Truck/Van
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
            
            <h2 className="text-2xl font-bold mb-6 relative z-10">Estimated Breakdown</h2>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Auction Price (Bid)</span>
                <span className="font-semibold text-lg">${budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Auction Fees (approx)</span>
                <span className="font-medium">${auctionFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Land Transport (US)</span>
                <span className="font-medium">${landShipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Ocean Freight</span>
                <span className="font-medium">${oceanShipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Broker / Service Fee</span>
                <span className="font-medium">${serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300">Est. Customs Duty</span>
                <span className="font-medium">${customs.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 mt-4">
                <span className="text-xl font-bold">Total Estimate</span>
                <span className="text-3xl font-black text-emerald-400">${total.toLocaleString()}</span>
              </div>
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                * This is an estimate. Exact fees depend on the specific auction location, vehicle condition, and current shipping rates.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-6 text-blue-900">Want an exact quote for a specific lot?</h3>
            <LeadForm title="" />
          </div>
        </div>
      </div>
    </div>
  );
}
