"use client";

import { useState } from 'react';

export default function LeadForm({ title = "Request a quote" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be webhook to CRM
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p>Your request has been submitted. We will contact you within 15 minutes.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
          <input 
            type="tel" 
            name="phone" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="+1 ..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
          <input 
            type="text" 
            name="budget" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="10000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <select 
            name="destination" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            defaultValue=""
            required
          >
            <option value="" disabled>Select Destination</option>
            <option value="ukraine">Ukraine</option>
            <option value="uae">UAE</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-lg transition-colors"
        >
          Send Request
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
          We contact you within 15 minutes with exact pricing estimate.
        </p>
      </form>
    </div>
  );
}
