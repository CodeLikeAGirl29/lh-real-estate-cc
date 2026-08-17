"use client";
import { useMemo, useState } from "react";
import { FaHouse, FaScaleBalanced, FaXmark } from "react-icons/fa6";
import { m } from "framer-motion";

const defaultComp = () => ({ label: "", price: "", sqft: "" });

export default function CMAEstimator() {
  // Subject property
  const [subjectSqft, setSubjectSqft] = useState(1800);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [adjustment, setAdjustment] = useState(0);

  // Comparable sales — the visitor's own known comps, since this tool
  // has no live MLS feed behind it. It's a ballpark estimate, not a
  // substitute for a verified CMA.
  const [comps, setComps] = useState([
    { label: "Comp 1", price: 365000, sqft: 1750 },
    { label: "Comp 2", price: 398000, sqft: 1900 },
    { label: "Comp 3", price: "", sqft: "" },
  ]);

  const updateComp = (index, field, value) => {
    setComps((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)),
    );
  };

  const addComp = () => {
    setComps((prev) => [...prev, defaultComp()]);
  };

  const removeComp = (index) => {
    setComps((prev) => prev.filter((_, i) => i !== index));
  };

  const currency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value || 0);

  const results = useMemo(() => {
    const validComps = comps
      .map((c) => ({
        pricePerSqft:
          Number(c.price) > 0 && Number(c.sqft) > 0
            ? Number(c.price) / Number(c.sqft)
            : null,
      }))
      .filter((c) => c.pricePerSqft !== null);

    if (validComps.length === 0 || !subjectSqft) {
      return { low: 0, mid: 0, high: 0, avgPsf: 0, count: 0 };
    }

    const psfValues = validComps.map((c) => c.pricePerSqft);
    const avgPsf = psfValues.reduce((a, b) => a + b, 0) / psfValues.length;
    const minPsf = Math.min(...psfValues);
    const maxPsf = Math.max(...psfValues);

    const adjMultiplier = 1 + Number(adjustment) / 100;

    return {
      low: Math.round(minPsf * subjectSqft * adjMultiplier),
      mid: Math.round(avgPsf * subjectSqft * adjMultiplier),
      high: Math.round(maxPsf * subjectSqft * adjMultiplier),
      avgPsf: avgPsf.toFixed(0),
      count: validComps.length,
    };
  }, [comps, subjectSqft, adjustment]);

  return (
    <section className="paper-section py-24" id="cma">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Ballpark Your <span className="text-signal">Home Value</span>
            </h2>
            <span className="mt-2 block h-[3px] w-12 bg-gulf" />
            <p className="mt-4 max-w-xl text-ink/60 text-[15px] leading-relaxed">
              A do-it-yourself estimate using comps you already know about. It's
              a starting point, not a verified number — for that, I'll run the
              real thing against actual MLS data.
            </p>
          </m.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          {/* Subject property + result */}
          <div className="flex flex-col gap-6">
            <div className="corner-marks border border-ink/10 p-8 space-y-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gulf">
                <FaHouse className="size-3" /> Your Property
              </div>

              <label className="flex flex-col gap-2">
                <span className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-ink/50">
                  Square Footage
                  <span className="font-display text-sm normal-case tracking-normal text-ink font-bold">
                    {subjectSqft.toLocaleString()} sqft
                  </span>
                </span>
                <input
                  type="range"
                  min={500}
                  max={6000}
                  step={50}
                  value={subjectSqft}
                  onChange={(e) => setSubjectSqft(Number(e.target.value))}
                  className="w-full h-1 bg-ink/15 rounded-sm appearance-none cursor-pointer outline-none accent-gulf
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-gulf
                    [&::-webkit-slider-thumb]:border-0
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-gulf
                    [&::-moz-range-thumb]:border-0"
                />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                    Bedrooms
                  </span>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(Number(e.target.value))}
                    className="px-3 py-2 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                    Bathrooms
                  </span>
                  <select
                    value={baths}
                    onChange={(e) => setBaths(Number(e.target.value))}
                    className="px-3 py-2 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-ink/50">
                  Condition / Upgrade Adjustment
                  <span className="font-display text-sm normal-case tracking-normal text-ink font-bold">
                    {adjustment > 0 ? "+" : ""}
                    {adjustment}%
                  </span>
                </span>
                <input
                  type="range"
                  min={-15}
                  max={15}
                  step={1}
                  value={adjustment}
                  onChange={(e) => setAdjustment(Number(e.target.value))}
                  className="w-full h-1 bg-ink/15 rounded-sm appearance-none cursor-pointer outline-none accent-gulf
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-gulf
                    [&::-webkit-slider-thumb]:border-0
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-gulf
                    [&::-moz-range-thumb]:border-0"
                />
                <span className="text-[11px] text-ink/40 leading-relaxed">
                  Nudge this if your property is meaningfully nicer or rougher
                  than the comps below — recent renovations, deferred
                  maintenance, lot size, etc.
                </span>
              </label>
            </div>

            <div className="corner-marks border border-ink/10 bg-background p-8 flex flex-col justify-center gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-gulf">
                  Estimated Value Range
                </span>
                {results.count > 0 ? (
                  <div className="font-display text-4xl font-bold text-foreground mt-2">
                    {currency(results.low)}
                    <span className="text-foreground/40 font-sans text-xl">
                      {" "}
                      &ndash;{" "}
                    </span>
                    {currency(results.high)}
                  </div>
                ) : (
                  <div className="font-display text-xl font-bold text-foreground/40 mt-2">
                    Add at least one comp to see an estimate
                  </div>
                )}
              </div>
              {results.count > 0 && (
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-foreground/10">
                  <div>
                    <span className="block font-display text-xl font-bold text-foreground">
                      {currency(results.mid)}
                    </span>
                    <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
                      Midpoint Estimate
                    </span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-foreground">
                      ${results.avgPsf}/sqft
                    </span>
                    <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
                      Avg. Comp Price/Sqft
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Comps */}
          <div className="corner-marks border border-ink/10 p-8">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gulf mb-6">
              <FaScaleBalanced className="size-3" /> Comparable Sales
            </div>
            <div className="space-y-5">
              {comps.map((comp, i) => {
                const psf =
                  Number(comp.price) > 0 && Number(comp.sqft) > 0
                    ? (Number(comp.price) / Number(comp.sqft)).toFixed(0)
                    : null;
                return (
                  <div
                    key={i}
                    className="border border-ink/10 p-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto_auto] gap-3 items-end"
                  >
                    <label className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        Address / Label
                      </span>
                      <input
                        type="text"
                        value={comp.label}
                        placeholder={`Comp ${i + 1}`}
                        onChange={(e) => updateComp(i, "label", e.target.value)}
                        className="px-2 py-1.5 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        Sold Price
                      </span>
                      <input
                        type="number"
                        value={comp.price}
                        placeholder="365000"
                        onChange={(e) => updateComp(i, "price", e.target.value)}
                        className="px-2 py-1.5 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        Sqft
                      </span>
                      <input
                        type="number"
                        value={comp.sqft}
                        placeholder="1750"
                        onChange={(e) => updateComp(i, "sqft", e.target.value)}
                        className="px-2 py-1.5 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
                      />
                    </label>
                    <div className="font-mono text-xs text-gulf font-bold whitespace-nowrap pb-1.5">
                      {psf ? `$${psf}/sqft` : "—"}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeComp(i)}
                      disabled={comps.length <= 1}
                      aria-label="Remove comp"
                      className="pb-1.5 text-ink/30 hover:text-signal disabled:opacity-0 disabled:pointer-events-none transition-colors"
                    >
                      <FaXmark className="size-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={addComp}
              className="mt-5 text-xs font-mono uppercase tracking-widest text-gulf hover:opacity-70 transition"
            >
              + Add Comp
            </button>

            <p className="text-xs text-ink/40 leading-relaxed pt-6 mt-2 border-t border-ink/10">
              Pull these from recent sold listings in your neighborhood — a
              public listing site, or a house down the street you know sold
              recently. The more similar the comp, the better this estimate.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-ink/10">
          <div>
            <h4 className="font-display text-xl font-bold text-ink">
              Want the number backed by real data?
            </h4>
            <p className="text-ink/60 text-sm">
              This is a ballpark. I&apos;ll run a full CMA against verified MLS
              comps — free, no obligation.
            </p>
          </div>
          <a
            href="#contact"
            className="corner-marks px-8 py-3 bg-signal text-ink font-bold hover:opacity-90 transition whitespace-nowrap"
          >
            Get My Verified CMA
          </a>
        </div>
      </div>
    </section>
  );
}
