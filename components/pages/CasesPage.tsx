import CaseCard from "@/components/savings-cases/CaseCard";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import { commerce } from "@/lib/commerceCopy";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { getAllSavingsCases } from "@/lib/savings-cases";

export default function CasesPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).cases;
  const co = commerce(locale);
  const cases = getAllSavingsCases();
  const hrefPrefix = locale === "ru" ? "/ru" : "";
  const verifiedCases = cases.filter((c) => c.is_real_case);
  const illustrativeCases = cases.filter((c) => !c.is_real_case);
  const copy =
    locale === "ru"
      ? {
          verifiedTitle: "Реальные завершенные кейсы",
          illustrativeTitle: "Примеры расчетов (оценка)",
          emptyVerified: "Подтвержденные завершенные кейсы будут добавляться по мере подготовки материалов с подтвержденной доставкой.",
        }
      : {
          verifiedTitle: "Verified Delivered Cases",
          illustrativeTitle: "Illustrative Cost Examples",
          emptyVerified: "Verified delivered cases will be added here as soon as completed transactions are prepared for publication.",
        };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{co.casesPageH1}</h1>
        <p className="text-lg text-gray-600 mb-4 text-center max-w-3xl mx-auto">{co.casesPageIntro}</p>
        <p className="text-sm text-gray-500 mb-14 text-center max-w-2xl mx-auto">{t.subtitle}</p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">{copy.verifiedTitle}</h2>
          {verifiedCases.length ? (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verifiedCases.map((c) => (
                <CaseCard key={c.id} c={c} locale={locale} hrefPrefix={hrefPrefix} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-sm leading-6 text-gray-600">
              {copy.emptyVerified}
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">{copy.illustrativeTitle}</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {illustrativeCases.map((c) => (
              <CaseCard key={c.id} c={c} locale={locale} hrefPrefix={hrefPrefix} />
            ))}
          </div>
        </section>

        <div className="mt-20 max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t.moreTitle}</h2>
          <p className="text-gray-600 mb-8">{t.moreSub}</p>
          <LeadFormUniversal heading={t.formTitle} formType="general" sourceContext="cases_footer" />
        </div>
      </div>
    </div>
  );
}
