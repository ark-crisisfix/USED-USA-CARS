import Link from "next/link";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function UsedCarsUsaPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).usedCarsUsa;
  const L = (path: string) => localizePath(path, locale);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{t.h1}</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t.p1}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{t.h2a}</h2>
              <p>{t.p2}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>{t.li1}</li>
                <li>{t.li2}</li>
                <li>{t.li3}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{t.h2b}</h2>
              <ol className="list-decimal pl-6 space-y-4 mt-4">
                <li>{t.ol1}</li>
                <li>{t.ol2}</li>
                <li>{t.ol3}</li>
                <li>{t.ol4}</li>
              </ol>

              <div className="bg-blue-50 p-6 rounded-xl mt-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t.boxTitle}</h3>
                <p className="text-blue-800 mb-4">{t.boxBody}</p>
                <Link
                  href={L("/catalog")}
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {t.boxCta}
                </Link>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">{t.faqTitle}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">{t.faq1q}</h4>
                  <p>{t.faq1a}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.faq2q}</h4>
                  <p>{t.faq2a}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <LeadFormUniversal heading={t.formTitle} formType="general" sourceContext="used_cars_usa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
