import LeadFormUniversal from "@/components/LeadFormUniversal";
import { commerce } from "@/lib/commerceCopy";
import { caseTypeLabel, deliveryFeesTotal } from "@/lib/savings-cases";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import type { SavingsCase } from "@/lib/types/commerce";
import Link from "next/link";

function destLeadPrefill(d: SavingsCase["destination"]): "Canada" | "Ukraine" | "UAE" | "Other" {
  if (d === "ukraine") return "Ukraine";
  if (d === "uae") return "UAE";
  if (d === "canada") return "Canada";
  return "Other";
}

export default function SavingsCaseDetailPage({ c, locale }: { c: SavingsCase; locale: Locale }) {
  const co = commerce(locale);
  const L = (path: string) => localizePath(path, locale);
  const title = `${c.year} ${c.make} ${c.model}`;
  const delivery = deliveryFeesTotal(c);

  const before = c.before_images;
  const after = c.after_images;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={L("/")} className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={L("/cases")} className="hover:text-blue-600">
            {co.viewAllCases}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{title}</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold text-blue-700 mb-2">{c.destination_label}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-700 mt-4 font-medium">{c.verdict}</p>
          {c.is_estimate ? (
            <p className="mt-2 inline-block text-sm font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded">{co.estimateLabel}</p>
          ) : null}
          {c.client_label ? <p className="text-sm text-gray-500 mt-3">{c.client_label}</p> : null}
        </header>

        {before.length + after.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {before.map((src, i) => (
                <figure key={`b-${i}`} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${title} — before ${i + 1}`} className="w-full h-56 object-cover" />
                  <figcaption className="text-xs text-gray-500 p-2">Before / auction condition</figcaption>
                </figure>
              ))}
              {after.map((src, i) => (
                <figure key={`a-${i}`} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${title} — after ${i + 1}`} className="w-full h-56 object-cover" />
                  <figcaption className="text-xs text-gray-500 p-2">After repair / delivered / current</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mb-10 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 p-6 pb-0">Cost breakdown</h2>
          <p className="text-sm text-gray-500 px-6 pt-2">
            {caseTypeLabel(c.case_type)} · {c.currency}
          </p>
          <div className="overflow-x-auto p-6">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Auction price", c.auction_price],
                  ["Auction fees", c.auction_fees],
                  ["Inland transport", c.inland_transport],
                  ["Ocean shipping / export logistics", c.ocean_shipping],
                  ["Customs / clearance", c.customs],
                  ["Repair cost", c.repair_cost],
                  ["Final total", c.final_total],
                ].map(([label, val]) => (
                  <tr key={String(label)}>
                    <td className="py-2 pr-4 text-gray-600">{label}</td>
                    <td className="py-2 font-semibold text-gray-900 text-right">
                      {val == null ? "—" : `$${Number(val).toLocaleString()}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-4">
              Delivery / fees (summary): ${delivery.toLocaleString()} {c.currency} (fees + inland + ocean + customs).
            </p>
          </div>
        </section>

        <section className="mb-10 bg-emerald-50 border border-emerald-100 rounded-xl p-6">
          <h2 className="text-lg font-bold text-emerald-950 mb-3">Market comparison</h2>
          <p className="text-gray-800">
            <span className="text-gray-600">Local market level (destination, {c.is_estimate ? "estimate" : "reference"}):</span>{" "}
            <strong>
              ${c.market_price.toLocaleString()} {c.currency}
            </strong>
          </p>
          <p className="text-gray-800 mt-2">
            <span className="text-gray-600">{co.saved}:</span>{" "}
            <strong className="text-emerald-800">
              ${c.estimated_savings.toLocaleString()} {c.currency}
            </strong>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{c.summary}</p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link href={L("/calculator")} className="flex-1 text-center py-3 rounded-xl border border-gray-300 font-semibold bg-white hover:bg-gray-50">
            Calculate My Budget
          </Link>
          <a href="#lead-case" className="flex-1 text-center py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800">
            Request Similar Car
          </a>
        </div>

        <section id="lead-case" className="scroll-mt-24">
          <LeadFormUniversal
            heading="Request a similar car"
            subtitle={`Case reference: ${c.id} (${c.slug})`}
            formType="case_similar"
            caseReferenceId={c.id}
            destinationPrefill={destLeadPrefill(c.destination)}
            preferredVehicleInitial={title}
            sourceContext={`case:${c.slug}`}
            submitButtonText="Request Similar Car"
          />
        </section>
      </div>
    </div>
  );
}
