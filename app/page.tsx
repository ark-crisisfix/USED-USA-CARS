"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 flex justify-center items-center">
      <section className="max-w-3xl w-full bg-white rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Used Cars from USA</h1>
        <p className="text-gray-600 mb-6">
          Buy cars from Copart/IAAI with global delivery (Ukraine, UAE). Quick lead capture and simple conversion flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-center">
            <strong className="text-indigo-900 block text-lg">500+</strong>
            <span className="text-indigo-700 text-sm">cars sourced</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center">
            <strong className="text-emerald-900 block text-lg">20-40%</strong>
            <span className="text-emerald-700 text-sm">average saving</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-center">
            <strong className="text-amber-900 block text-lg">4-10 weeks</strong>
            <span className="text-amber-700 text-sm">delivery time</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Request a free quote</h2>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone / WhatsApp" 
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="text" 
            name="budget" 
            placeholder="Estimated Budget ($)" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <select 
            name="destination" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>Select Destination</option>
            <option value="ukraine">Ukraine</option>
            <option value="uae">UAE</option>
          </select>
          <button 
            type="button" 
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-lg transition-colors cursor-pointer"
            onClick={() => alert("Thank you! Your request has been submitted. We'll contact you within 15 minutes.")}
          >
            Send request
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          We contact you within 15 minutes with exact pricing estimate.
        </p>
      </section>
    </main>
  );
}
