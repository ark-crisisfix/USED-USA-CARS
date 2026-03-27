import type { Metadata } from "next";
import Link from "next/link";
import LeadConversionEvent from "@/components/LeadConversionEvent";
import { metaTitleWithSeoKeywords } from "@/lib/siteMeta";

export const metadata: Metadata = {
  title: metaTitleWithSeoKeywords("Thank you"),
  description: "Thank you for contacting NorthAm Cars. We will get back to you within 24 hours.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-20 font-sans">
      <LeadConversionEvent locale="en" />
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">NorthAm Cars</p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Thank you</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Your request has been received. We will get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/en"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Back to homepage
          </Link>
          <Link
            href="/en/ready-cars"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-500"
          >
            View ready cars
          </Link>
        </div>
      </div>
    </div>
  );
}
