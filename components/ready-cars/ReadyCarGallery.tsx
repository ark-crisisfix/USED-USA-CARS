"use client";

import { useCallback, useEffect, useState } from "react";

export default function ReadyCarGallery({ images, altBase }: { images: string[]; altBase: string }) {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);

  const imgs = images.length ? images : ["https://placehold.co/1200x800/e2e8f0/64748b?text=No+image"];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!modal) return;
      if (e.key === "Escape") setModal(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % imgs.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + imgs.length) % imgs.length);
    },
    [modal, imgs.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setModal(true)}
        className="relative w-full aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open full screen gallery"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgs[active]} alt={`${altBase} — photo ${active + 1}`} className="w-full h-full object-cover" />
      </button>
      {imgs.length > 1 ? (
        <div className="flex gap-2 flex-wrap">
          {imgs.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 ${i === active ? "border-blue-600" : "border-transparent opacity-80"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      {modal ? (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={() => setModal(false)}
              className="text-white text-sm font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
            >
              Close
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[active]} alt="" className="max-h-[85vh] max-w-full object-contain" />
          </div>
          {imgs.length > 1 ? (
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="button"
                className="text-white font-semibold px-4 py-2 bg-white/10 rounded-lg"
                onClick={() => setActive((i) => (i - 1 + imgs.length) % imgs.length)}
              >
                ←
              </button>
              <span className="text-white/80 self-center text-sm">
                {active + 1} / {imgs.length}
              </span>
              <button
                type="button"
                className="text-white font-semibold px-4 py-2 bg-white/10 rounded-lg"
                onClick={() => setActive((i) => (i + 1) % imgs.length)}
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
