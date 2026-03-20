import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function PricingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).pricing;
  const L = (path: string) => localizePath(path, locale);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{t.title}</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-2">{t.basicTitle}</h2>
            <div className="text-4xl font-black text-blue-600 mb-6">
              $500 <span className="text-lg font-medium text-gray-500">{t.perCar}</span>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{t.basicDesc}</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> {t.basicF1}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> {t.basicF2}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> {t.basicF3}
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-emerald-500 mr-2">✓</span> {t.basicF4}
              </li>
            </ul>
            <Link
              href={L("/contact")}
              className="block text-center w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold p-3 rounded-lg transition-colors"
            >
              {t.basicCta}
            </Link>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 font-bold px-4 py-1 rounded-bl-lg text-sm">
              {t.popular}
            </div>
            <h2 className="text-2xl font-bold mb-2">{t.fullTitle}</h2>
            <div className="text-4xl font-black mb-6">
              $850 <span className="text-lg font-medium text-blue-200">{t.perCar}</span>
            </div>
            <p className="text-blue-100 mb-6 flex-grow">{t.fullDesc}</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> {t.fullF1}
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> {t.fullF2}
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> {t.fullF3}
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> {t.fullF4}
              </li>
              <li className="flex items-center text-blue-50">
                <span className="text-amber-400 mr-2">✓</span> {t.fullF5}
              </li>
            </ul>
            <Link
              href={L("/contact")}
              className="block text-center w-full bg-white hover:bg-gray-100 text-blue-700 font-bold p-3 rounded-lg transition-colors shadow"
            >
              {t.fullCta}
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">{t.extraTitle}</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">{t.e1l}</span>
              <span>{t.e1v}</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">{t.e2l}</span>
              <span>{t.e2v}</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">{t.e3l}</span>
              <span>{t.e3v}</span>
            </div>
            <div className="flex justify-between border-b pb-3 border-gray-100">
              <span className="font-medium">{t.e4l}</span>
              <span>{t.e4v}</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href={L("/calculator")} className="text-blue-600 font-semibold hover:underline">
              {t.calcLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
