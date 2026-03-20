import LeadForm from "@/components/LeadForm";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Country = "ukraine" | "uae";

function ExportUkraine({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).exportUkraine;
  const steps = [
    { title: t.s1t, body: t.s1b },
    { title: t.s2t, body: t.s2b },
    { title: t.s3t, body: t.s3b },
    { title: t.s4t, body: t.s4b },
  ];
  const sideItems = [t.side1, t.side2, t.side3, t.side4];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t.h1}</h1>
          <p className="text-xl text-gray-600">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">{t.processTitle}</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mr-4">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="text-gray-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.costTitle}</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cAuction}</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cFees}</span>
                  <span className="font-semibold">$650</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cShip}</span>
                  <span className="font-semibold">$1,600</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cDuty}</span>
                  <span className="font-semibold">~$1,800</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cBroker}</span>
                  <span className="font-semibold">$450</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.cService}</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between text-lg pt-2 text-emerald-700 font-bold">
                  <span>{t.cTotal}</span>
                  <span>$9,500</span>
                </div>
                <p className="text-xs text-gray-500 mt-4">{t.cNote}</p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">{t.sideTitle}</h3>
                <ul className="space-y-3">
                  {sideItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LeadForm title={t.formTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportUae({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).exportUae;
  const steps = [
    { title: t.s1t, body: t.s1b },
    { title: t.s2t, body: t.s2b },
    { title: t.s3t, body: t.s3b },
    { title: t.s4t, body: t.s4b },
  ];
  const sideItems = [t.side1, t.side2, t.side3, t.side4];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t.h1}</h1>
          <p className="text-xl text-gray-600">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">{t.processTitle}</h2>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mr-4">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="text-gray-600">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{t.whyTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{t.why1t}</h3>
                  <p className="text-amber-800">{t.why1b}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🚢</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{t.why2t}</h3>
                  <p className="text-amber-800">{t.why2b}</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">{t.sideTitle}</h3>
                <ul className="space-y-3">
                  {sideItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-amber-500">★</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <LeadForm title={t.formTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExportLandingPage({ locale, country }: { locale: Locale; country: Country }) {
  return country === "ukraine" ? <ExportUkraine locale={locale} /> : <ExportUae locale={locale} />;
}
