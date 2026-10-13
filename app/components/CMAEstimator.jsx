"use client";
import { useMemo, useState } from "react";
import { FaHouse, FaScaleBalanced, FaXmark } from "react-icons/fa6";
import { m, AnimatePresence } from "framer-motion";

const defaultComp = () => ({
  id: Math.random().toString(36).slice(2),
  label: "",
  price: "",
  sqft: "",
});

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
    { id: "seed-1", label: "Comp 1", price: 365000, sqft: 1750 },
    { id: "seed-2", label: "Comp 2", price: 398000, sqft: 1900 },
    { id: "seed-3", label: "Comp 3", price: "", sqft: "" },
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
    <section className="paper-section border-t border-ink/10 py-20 sm:py-28" id="cma">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <m.div
          >
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Ballpark your home value
            </h2>
                        <p className="mt-4 max-w-xl text-ink/75 text-lg leading-relaxed">
              A do-it-yourself estimate using comps you already know about.
              It&apos;s a starting point, not a verified number — for that,
              I&apos;ll run the real thing against actual MLS data.
            </p>
          </m.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          {/* Subject property + result */}
          <m.div
            className="flex flex-col gap-6"
          >
            <div className="panel p-8 space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-reef">
                <FaHouse className="size-3" /> Your Property
              </div>

              <label className="flex flex-col gap-2">
                <span className="flex items-baseline justify-between text-sm font-medium text-ink/70">
                  Square Footage
                  <span className="font-display text-base text-ink font-semibold tabular">
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
                  className="w-full h-1 bg-ink/15 rounded-sm appearance-none cursor-pointer outline-none accent-reef
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-reef
                    [&::-webkit-slider-thumb]:border-0
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-reef
                    [&::-moz-range-thumb]:border-0"
                />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-ink/70">
                    Bedrooms
                  </span>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(Number(e.target.value))}
                    className="px-3 py-2 rounded-md bg-background text-ink text-sm border border-ink/20 focus:border-reef outline-0"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-ink/70">
                    Bathrooms
                  </span>
                  <select
                    value={baths}
                    onChange={(e) => setBaths(Number(e.target.value))}
                    className="px-3 py-2 rounded-md bg-background text-ink text-sm border border-ink/20 focus:border-reef outline-0"
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
                <span className="flex items-baseline justify-between text-sm font-medium text-ink/70">
                  Condition / Upgrade Adjustment
                  <span className="font-display text-base text-ink font-semibold tabular">
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
                  className="w-full h-1 bg-ink/15 rounded-sm appearance-none cursor-pointer outline-none accent-reef
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-reef
                    [&::-webkit-slider-thumb]:border-0
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-reef
                    [&::-moz-range-thumb]:border-0"
                />
                <span className="text-sm text-ink/60 leading-relaxed">
                  Nudge this if your property is meaningfully nicer or rougher
                  than the comps below — recent renovations, deferred
                  maintenance, lot size, etc.
                </span>
              </label>
            </div>

            <div className="panel bg-background p-8 flex flex-col justify-center gap-6">
              <div>
                <span className="text-sm font-semibold text-reef">
                  Estimated Value Range
                </span>
                {results.count > 0 ? (
                  <AnimatePresence mode="wait">
                    <m.div
                      key={`${results.low}-${results.high}`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="font-display text-4xl font-semibold text-foreground tabular mt-2"
                    >
                      {currency(results.low)}
                      <span className="text-foreground/40 font-sans text-xl">
                        {" "}
                        &ndash;{" "}
                      </span>
                      {currency(results.high)}
                    </m.div>
                  </AnimatePresence>
                ) : (
                  <div className="font-display text-xl font-bold text-foreground/40 mt-2">
                    Add at least one comp to see an estimate
                  </div>
                )}
              </div>
              {results.count > 0 && (
                <div className="flex flex-col gap-4 pt-6 border-t border-foreground/10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-foreground/65">
                      Midpoint Estimate
                    </span>
                    <span className="font-display text-xl font-bold text-foreground whitespace-nowrap">
                      {currency(results.mid)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-foreground/65">
                      Avg. Comp Price/Sqft
                    </span>
                    <span className="font-display text-xl font-bold text-foreground whitespace-nowrap">
                      ${results.avgPsf}/sqft
                    </span>
                  </div>
                </div>
              )}
            </div>
          </m.div>

          {/* Comps */}
          <m.div
            className="panel p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-reef mb-6">
              <FaScaleBalanced className="size-3" /> Comparable Sales
            </div>
            <div className="space-y-5">
              <AnimatePresence initial={false}>
                {comps.map((comp, i) => {
                  const psf =
                    Number(comp.price) > 0 && Number(comp.sqft) > 0
                      ? (Number(comp.price) / Number(comp.sqft)).toFixed(0)
                      : null;
                  return (
                    <m.div
                      key={comp.id}
                      layout
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-lg border border-ink/10 bg-background/60 p-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto_auto] gap-3 items-end overflow-hidden"
                    >
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-ink/65">
                          Address / Label
                        </span>
                        <input
                          type="text"
                          value={comp.label}
                          placeholder={`Comp ${i + 1}`}
                          onChange={(e) =>
                            updateComp(i, "label", e.target.value)
                          }
                          className="px-2 py-1.5 rounded-md bg-background text-ink text-sm border border-ink/20 focus:border-reef outline-0"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-ink/65">
                          Sold Price
                        </span>
                        <input
                          type="number"
                          value={comp.price}
                          placeholder="365000"
                          onChange={(e) =>
                            updateComp(i, "price", e.target.value)
                          }
                          className="px-2 py-1.5 rounded-md bg-background text-ink text-sm border border-ink/20 focus:border-reef outline-0"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-ink/65">
                          Sqft
                        </span>
                        <input
                          type="number"
                          value={comp.sqft}
                          placeholder="1750"
                          onChange={(e) =>
                            updateComp(i, "sqft", e.target.value)
                          }
                          className="px-2 py-1.5 rounded-md bg-background text-ink text-sm border border-ink/20 focus:border-reef outline-0"
                        />
                      </label>
                      <div className="tabular text-sm text-steel font-semibold whitespace-nowrap pb-1.5">
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
                    </m.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={addComp}
              className="mt-5 text-sm font-semibold text-reef hover:opacity-70 transition"
            >
              Add another comp
            </button>

            <p className="text-sm text-ink/65 leading-relaxed pt-6 mt-2 border-t border-ink/10">
              Pull these from recent sold listings in your neighborhood — a
              public listing site, or a house down the street you know sold
              recently. The more similar the comp, the better this estimate.
            </p>
          </m.div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 panel p-8">
          <div>
            <h4 className="font-display text-2xl font-semibold text-ink">
              Want the number backed by real data?
            </h4>
            <p className="text-ink/75">
              This is a ballpark. I&apos;ll run a full CMA against verified MLS
              comps — free, no obligation.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full px-7 py-3.5 bg-reef text-background font-semibold hover:opacity-90 transition whitespace-nowrap"
          >
            Get My Verified CMA
          </a>
        </div>
      </div>
    </section>
  );
}
