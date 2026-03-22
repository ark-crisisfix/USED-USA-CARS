"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventName: string | Date,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}

type LeadConversionEventProps = {
  locale: "en" | "ru";
};

export default function LeadConversionEvent({ locale }: LeadConversionEventProps) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: locale === "ru" ? "thank_you_ru" : "thank_you_en",
      lead_source: "website_form",
      page_locale: locale,
      transport_type: "beacon",
    });
  }, [locale]);

  return null;
}
