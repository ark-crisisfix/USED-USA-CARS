import LeadForm from "@/components/LeadForm";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-8">{t.touch}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.phone}</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">{t.phoneHours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.email}</h3>
                    <p className="text-gray-600 mt-1">export@used-cars-usa.com</p>
                    <p className="text-sm text-gray-500 mt-1">{t.emailNote}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.office}</h3>
                    <p className="text-gray-600 mt-1">100 Auction Way, Suite 400</p>
                    <p className="text-gray-600">Miami, FL 33101, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{t.reps}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Ukraine (Kyiv)</span>
                    <span className="font-medium">+380 44 123 4567</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">UAE (Dubai)</span>
                    <span className="font-medium">+971 4 123 4567</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-600">Poland (Warsaw)</span>
                    <span className="font-medium">+48 22 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <LeadForm title={t.formTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
