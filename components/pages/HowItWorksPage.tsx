import Link from "next/link";
import AuctionSourcesSection from "@/components/AuctionSourcesSection";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function HowItWorksPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).howItWorks;
  const lead = getDictionary(locale).leadForm;
  const L = (path: string) => localizePath(path, locale);
  const parts = locale === "ru"
    ? {
        title: "Нужны запчасти для американского автомобиля?",
        body: "Если авто уже куплено, восстановление в процессе или вы хотите заранее понять бюджет по деталям, мы можем подобрать и отправить запчасти отдельно или вместе с машиной.",
        cta: "Подбор и отправка запчастей",
      }
    : {
        title: "Need parts for an American vehicle?",
        body: "If the car is already purchased, under repair, or you want to understand the parts budget in advance, we can source and ship components separately or together with the vehicle.",
        cta: "Parts sourcing and shipping",
      };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">{t.title}</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">{t.subtitle}</p>

        <div className="space-y-12">
          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <AuctionSourcesSection locale={locale} />
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">{parts.title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">{parts.body}</p>
          <Link
            href={L("/parts-shipping")}
            className="mt-6 inline-flex rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-700"
          >
            {parts.cta}
          </Link>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">{t.ctaTitle}</h2>
          <div className="flex justify-center">
            <Link
              href={L("/catalog")}
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg text-lg"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <LeadFormUniversal
            heading={lead.defaultTitle}
            formType="general"
            sourceContext="how_it_works_footer"
          />
        </div>
      </div>
    </div>
  );
}
