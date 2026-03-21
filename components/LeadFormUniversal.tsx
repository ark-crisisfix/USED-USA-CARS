"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { LeadFormType } from "@/lib/types/commerce";
import { getLeadSubmitUrl } from "@/lib/leads/submitUrl";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";
import { getLeadUniversalLabels } from "@/lib/leadFormLabels";

const DEST_VALUES = ["Canada", "Ukraine", "UAE", "Other"] as const;

export type LeadFormUniversalProps = {
  heading?: string;
  subtitle?: string;
  formType?: LeadFormType;
  sourceContext?: string;
  destinationPrefill?: string;
  carReferenceId?: string;
  readyCarReferenceId?: string;
  caseReferenceId?: string;
  compact?: boolean;
  submitButtonText?: string;
  className?: string;
  /** Pre-fills preferred vehicle (e.g. from ready car / case page) */
  preferredVehicleInitial?: string;
};

export default function LeadFormUniversal({
  heading = "Tell us what you need",
  subtitle: subtitleProp,
  formType = "general",
  sourceContext,
  destinationPrefill,
  carReferenceId,
  readyCarReferenceId,
  caseReferenceId,
  compact,
  submitButtonText,
  className = "",
  preferredVehicleInitial = "",
}: LeadFormUniversalProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const u = getLeadUniversalLabels(locale);
  const subtitle = subtitleProp ?? u.subtitle;
  const btnText = submitButtonText ?? (locale === "ru" ? "Отправить заявку" : "Send request");

  const submitUrl = useMemo(() => getLeadSubmitUrl(), []);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const [destination, setDestination] = useState("");
  const [preferredVehicle, setPreferredVehicle] = useState(preferredVehicleInitial);
  const [conditionPreference, setConditionPreference] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (destinationPrefill && DEST_VALUES.includes(destinationPrefill as (typeof DEST_VALUES)[number])) {
      setDestination(destinationPrefill);
    }
  }, [destinationPrefill]);

  useEffect(() => {
    if (preferredVehicleInitial) setPreferredVehicle(preferredVehicleInitial);
  }, [preferredVehicleInitial]);

  const fieldClass =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setStatus("sending");

    const payload = {
      name: name.trim(),
      contact: contact.trim(),
      budget,
      destination,
      preferred_vehicle: preferredVehicle.trim() || undefined,
      condition_preference: conditionPreference || undefined,
      message: message.trim() || undefined,
      source_page: typeof window !== "undefined" ? window.location.pathname + window.location.search : pathname,
      form_type: formType,
      source_context: sourceContext,
      car_reference_id: carReferenceId,
      ready_car_reference_id: readyCarReferenceId,
      case_reference_id: caseReferenceId,
      website: honeypot,
      timestamp: new Date().toISOString(),
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    };

    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; details?: string[] };

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.details?.join(" ") || data.error || u.errorFallback);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(u.errorFallback);
    }
  }

  const catalogHref = localizePath("/catalog", locale);
  const calcHref = localizePath("/calculator", locale);

  if (status === "success") {
    return (
      <div className={`rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 ${className}`}>
        <h3 className="text-xl font-bold mb-2">{u.successTitle}</h3>
        <p className="mb-4">{u.successBody}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href={catalogHref} className="font-semibold text-blue-700 hover:underline">
            {u.backCatalog}
          </a>
          <span className="text-gray-400">|</span>
          <a href={calcHref} className="font-semibold text-blue-700 hover:underline">
            {u.calcLink}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ${className}`}>
      <h3 className={`font-bold text-gray-900 ${compact ? "text-xl mb-2" : "text-2xl mb-2"}`}>{heading}</h3>
      {subtitle ? <p className="text-gray-600 text-sm mb-4">{subtitle}</p> : null}

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{u.nameLabel}</label>
          <input className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} required placeholder={u.namePh} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{u.contactLabel}</label>
          <input className={fieldClass} value={contact} onChange={(e) => setContact(e.target.value)} required placeholder={u.contactPh} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{u.budgetLabel}</label>
          <select className={`${fieldClass} bg-white`} value={budget} onChange={(e) => setBudget(e.target.value)} required>
            <option value="" disabled>
              {u.budgetPh}
            </option>
            {u.budgetOpts.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{u.destLabel}</label>
          <select className={`${fieldClass} bg-white`} value={destination} onChange={(e) => setDestination(e.target.value)} required>
            <option value="" disabled>
              {u.destPh}
            </option>
            {u.destOpts.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.preferredVehicle}</label>
              <input className={fieldClass} value={preferredVehicle} onChange={(e) => setPreferredVehicle(e.target.value)} placeholder={u.preferredVehiclePh} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.conditionLabel}</label>
              <select className={`${fieldClass} bg-white`} value={conditionPreference} onChange={(e) => setConditionPreference(e.target.value)}>
                {u.conditionOpts.map((o) => (
                  <option key={o.value || "ns"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{u.message}</label>
              <textarea className={fieldClass} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={u.messagePh} />
            </div>
          </>
        )}

        {status === "error" && errorMsg ? (
          <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm p-3">{errorMsg}</div>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors"
        >
          {status === "sending" ? u.sending : btnText}
        </button>
        <p className="text-xs text-center text-gray-500">{u.footnote}</p>
      </form>
    </div>
  );
}
