"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Leaflet touches `window` on import, so the map itself must never
// render on the server.
const MarketMap = dynamic(() => import("./MarketMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] lg:h-[520px] corner-marks border border-ink/10 flex items-center justify-center text-ink/40 font-mono text-xs uppercase tracking-widest">
      Loading map…
    </div>
  ),
});

export default function MarketMapSection() {
  return (
    <section className="paper-section py-24" id="market-map">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Explore The <span className="text-signal">Emerald Coast</span>
          </h2>
          <span className="mt-2 block h-[3px] w-12 bg-gulf" />
          <p className="mt-4 max-w-xl text-ink/60 text-[15px] leading-relaxed">
            Every submarket in Okaloosa County behaves differently. Click a
            neighborhood to see how it fits your goals.
          </p>
        </motion.div>
        <MarketMap />
      </div>
    </section>
  );
}
