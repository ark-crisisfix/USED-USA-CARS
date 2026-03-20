"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath } from "@/lib/i18n";

export default function LeadForm({ title }: { title?: string }) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const t = getDictionary(locale).leadForm;
  const displayTitle = title ?? t.defaultTitle;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
        <h3 className="text-xl font-bold mb-2">{t.thankYou}</h3>
        <p>{t.thankBody}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold mb-4">{displayTitle}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={locale === "ru" ? "Иван Иванов" : "John Doe"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={locale === "ru" ? "+380 …" : "+1 …"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.budget}</label>
          <input
            type="text"
            name="budget"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="10000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.destination}</label>
          <select
            name="destination"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            defaultValue=""
            required
          >
            <option value="" disabled>
              {t.destPlaceholder}
            </option>
            <option value="ukraine">{t.ukraine}</option>
            <option value="uae">{t.uae}</option>
            <option value="other">{t.other}</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-lg transition-colors"
        >
          {t.submit}
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">{t.footnote}</p>
      </form>
    </div>
  );
}
