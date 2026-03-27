import type { Metadata } from "next";
import Link from "next/link";
import LeadConversionEvent from "@/components/LeadConversionEvent";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Спасибо"),
  description: "Спасибо за обращение в NorthAm Cars. Мы свяжемся с вами в течение 24 часов.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-20 font-sans">
      <LeadConversionEvent locale="ru" />
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">NorthAm Cars</p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Спасибо</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Ваша заявка получена. Мы свяжемся с вами в течение 24 часов.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            На главную
          </Link>
          <Link
            href="/ready-cars"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-500"
          >
            Смотреть авто в наличии
          </Link>
        </div>
      </div>
    </div>
  );
}
