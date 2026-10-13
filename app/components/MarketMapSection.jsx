"use client";
import dynamic from "next/dynamic";

// Leaflet touches `window` on import, so the map itself must never
// render on the server.
const MarketMap = dynamic(() => import("./MarketMap"), {
  ssr: false,
  loading: () => (
    <div className="panel flex h-[420px] items-center justify-center text-sm text-ink/60 lg:h-[520px]">
      Loading the map…
    </div>
  ),
});

export default function MarketMapSection() {
  return (
    <section className="paper-section border-t border-ink/10 py-20 sm:py-28" id="market-map">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Compare neighborhoods
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/75">
            Every part of Okaloosa County behaves differently. Pick a
            neighborhood to see how it fits what you&apos;re after.
          </p>
        </div>
        <MarketMap />
      </div>
    </section>
  );
}
