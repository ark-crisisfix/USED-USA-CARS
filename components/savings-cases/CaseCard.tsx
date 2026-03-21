import Link from "next/link";
import type { SavingsCase } from "@/lib/types/commerce";
import { caseTypeLabel, deliveryFeesTotal } from "@/lib/savings-cases";
import type { Locale } from "@/lib/i18n";
import { commerce } from "@/lib/commerceCopy";

function destBadge(locale: Locale, dest: SavingsCase["destination"]): string {
  if (locale === "ru") {
    const m: Record<SavingsCase["destination"], string> = {
      ukraine: "Украина",
      uae: "ОАЭ",
      canada: "Канада",
      worldwide: "Другое",
    };
    return m[dest];
  }
  const m: Record<SavingsCase["destination"], string> = {
    ukraine: "Ukraine",
    uae: "UAE",
    canada: "Canada",
    worldwide: "Other",
  };
  return m[dest];
}

export default function CaseCard({
  c,
  locale,
  hrefPrefix,
  compact,
}: {
  c: SavingsCase;
  locale: Locale;
  hrefPrefix: string;
  compact?: boolean;
}) {
  const co = commerce(locale);
  const base = hrefPrefix || "";
  const detailHref = `${base}/cases/${c.slug}`;
  const img = c.before_images[0] ?? c.after_images[0] ?? "https://placehold.co/800x500/e2e8f0/64748b?text=Case";
  const delivery = deliveryFeesTotal(c);
  const repair = c.repair_cost ?? 0;
  const repairLine = c.repair_cost != null ? `${co.repair}: $${repair.toLocaleString()}` : `${co.repair}: —`;

  return (
    <article className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full ${compact ? "" : ""}`}>
      <div className="relative h-44 bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-white/95 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">{destBadge(locale, c.destination)}</span>
        {c.is_estimate ? (
          <span className="absolute top-2 right-2 bg-amber-100 text-amber-900 text-xs font-bold px-2 py-1 rounded">{co.estimateLabel}</span>
        ) : null}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900">
          {c.year} {c.make} {c.model}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{caseTypeLabel(c.case_type)}</p>
        <ul className="text-sm text-gray-700 mt-3 space-y-1.5 flex-grow">
          <li>
            <span className="text-gray-500">{co.auctionPrice}:</span> ${c.auction_price.toLocaleString()} {c.currency}
          </li>
          <li>
            <span className="text-gray-500">{co.deliveryFees}:</span> ${delivery.toLocaleString()} {c.currency}
          </li>
          <li>{repairLine}</li>
          <li>
            <span className="text-gray-500">{co.finalTotal}:</span>{" "}
            <strong>
              ${c.final_total.toLocaleString()} {c.currency}
            </strong>
          </li>
        </ul>
        <p className="text-sm mt-3 text-slate-700 border-t border-gray-100 pt-3">
          <span className="text-gray-500">{co.estMarket}:</span> ${c.market_price.toLocaleString()} ·{" "}
          <span className="text-emerald-800 font-semibold">
            {co.saved}: ${c.estimated_savings.toLocaleString()}
          </span>
        </p>
        {c.client_label ? <p className="text-xs text-gray-500 mt-2">{c.client_label}</p> : null}
        <Link
          href={detailHref}
          className="mt-4 text-center text-sm font-semibold py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          {co.viewCase}
        </Link>
      </div>
    </article>
  );
}
