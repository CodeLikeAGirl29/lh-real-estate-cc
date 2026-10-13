"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { FaCalculator, FaChartLine } from "react-icons/fa6";
import { m, AnimatePresence } from "framer-motion";

export default function InvestmentCalculator() {
  const [mode, setMode] = useState("mortgage");

  // Mortgage Inputs
  const [price, setPrice] = useState(375000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxInsurance, setTaxInsurance] = useState(450);

  // CAP Rate Inputs
  const [rent, setRent] = useState(2600);
  const [expenses, setExpenses] = useState(900);
  const [purchasePrice, setPurchasePrice] = useState(375000);

  // Mortgage Math — pure derivation of the inputs above, so useMemo
  // instead of useState+useEffect (no external system to sync with).
  const mortgageResults = useMemo(() => {
    const P = Number(price);
    const D = Number(downPct);
    const R = Number(rate);
    const T = Number(term);
    const TI = Number(taxInsurance);

    const principal = P * (1 - D / 100);
    const monthlyRate = R / 100 / 12;
    const totalMonths = T * 12;

    let pAndI = 0;
    if (totalMonths > 0) {
      pAndI =
        monthlyRate === 0
          ? principal / totalMonths
          : (principal * monthlyRate) /
            (1 - Math.pow(1 + monthlyRate, -totalMonths));
    }
    const totalPayment = pAndI + TI;

    return {
      principal: Math.round(principal),
      pAndI: Math.round(pAndI) || 0,
      total: Math.round(totalPayment) || 0,
      downPayment: Math.round(P * (D / 100)) || 0,
    };
  }, [price, downPct, rate, term, taxInsurance]);

  // CAP Rate Math — depends on mortgageResults.pAndI for cash flow,
  // so it's memoized separately and reads from the memo above.
  const capResults = useMemo(() => {
    const rPrice = Number(purchasePrice);
    const mRent = Number(rent);
    const mExp = Number(expenses);

    const annualRent = mRent * 12;
    const annualExpenses = mExp * 12;
    const noi = annualRent - annualExpenses;
    const calculatedCap = rPrice > 0 ? (noi / rPrice) * 100 : 0;
    const monthlyCashFlow = mRent - mExp - mortgageResults.pAndI;

    return {
      noi: Math.round(noi) || 0,
      capRate: isNaN(calculatedCap) ? "0.00" : calculatedCap.toFixed(2),
      monthlyCashFlow: Math.round(monthlyCashFlow) || 0,
    };
  }, [purchasePrice, rent, expenses, mortgageResults.pAndI]);

  const currency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Sub-Field Component Helper (Clean input mappings)
  const renderField = (label, suffix, value, onChange, min, max, step) => (
    <label className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between text-sm font-medium text-ink/70">
        {label}
        <span className="font-display text-base text-ink font-semibold tabular">
          {suffix === "$" ? currency(value) : `${value}${suffix}`}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
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
  );

  return (
    <section className="paper-section py-20 sm:py-28" id="calculator">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <m.div
          >
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Run the numbers
            </h2>
                        <p className="mt-4 max-w-xl text-ink/75 text-lg leading-relaxed">
              A data-driven look at what a property actually costs — and what it
              could return. Estimates only; always verify with a lender and a
              full CMA.
            </p>
          </m.div>

          <div className="flex rounded-full border border-ink/15 p-1 relative">
            <button
              onClick={() => setMode("mortgage")}
              className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-semibold font-bold transition-colors ${
                mode === "mortgage" ? "text-background" : "text-ink/70 hover:text-ink"
              }`}
            >
              {mode === "mortgage" && (
                <m.span
                  layoutId="calcModeHighlight"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-reef"
                />
              )}
              <FaCalculator className="size-3" /> Mortgage
            </button>
            <button
              onClick={() => setMode("cap")}
              className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-semibold font-bold transition-colors ${
                mode === "cap" ? "text-background" : "text-ink/70 hover:text-ink"
              }`}
            >
              {mode === "cap" && (
                <m.span
                  layoutId="calcModeHighlight"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-reef"
                />
              )}
              <FaChartLine className="size-3" /> CAP Rate
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mode === "mortgage" ? (
            <m.div
              key="mortgage"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-10"
            >
              <div className="panel p-8 space-y-6">
                {renderField(
                  "Home Price",
                  "$",
                  price,
                  setPrice,
                  100000,
                  1500000,
                  5000,
                )}
                {renderField(
                  "Down Payment",
                  "%",
                  downPct,
                  setDownPct,
                  0,
                  50,
                  1,
                )}
                {renderField("Interest Rate", "%", rate, setRate, 2, 10, 0.125)}
                {renderField("Loan Term", " yrs", term, setTerm, 10, 30, 5)}
                {renderField(
                  "Tax + Insurance / mo",
                  "$",
                  taxInsurance,
                  setTaxInsurance,
                  0,
                  2000,
                  25,
                )}
              </div>

              <div className="panel bg-background p-8 flex flex-col justify-center gap-6">
                <div>
                  <span className="text-sm font-semibold text-reef">
                    Estimated Monthly Payment
                  </span>
                  <AnimatePresence mode="wait">
                    <m.div
                      key={mortgageResults.total}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="font-display text-5xl font-semibold text-foreground tabular mt-2"
                    >
                      {currency(mortgageResults.total)}
                      <span className="text-base font-sans text-foreground/50">
                        {" "}
                        / mo
                      </span>
                    </m.div>
                  </AnimatePresence>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-foreground/10">
                  <div>
                    <span className="block font-display text-xl font-bold text-foreground">
                      {currency(mortgageResults.pAndI)}
                    </span>
                    <span className="text-sm text-foreground/65">
                      Principal & Interest
                    </span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-foreground">
                      {currency(mortgageResults.downPayment)}
                    </span>
                    <span className="text-sm text-foreground/65">
                      Down Payment
                    </span>
                  </div>
                </div>
              </div>
            </m.div>
          ) : (
            <m.div
              key="cap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-10"
            >
              <div className="panel p-8 space-y-6">
                {renderField(
                  "Purchase Price",
                  "$",
                  purchasePrice,
                  setPurchasePrice,
                  100000,
                  1500000,
                  5000,
                )}
                {renderField("Monthly Rent", "$", rent, setRent, 500, 8000, 50)}
                {renderField(
                  "Monthly Expenses",
                  "$",
                  expenses,
                  setExpenses,
                  0,
                  4000,
                  25,
                )}
                <p className="text-sm text-ink/65 leading-relaxed pt-2 border-t border-ink/10">
                  Expenses should include estimated property management, HOA,
                  maintenance reserve, taxes, and insurance — everything besides
                  the mortgage payment itself.
                </p>
              </div>

              <div className="panel bg-background p-8 flex flex-col justify-center gap-6">
                <div>
                  <span className="text-sm font-semibold text-reef">
                    CAP Rate
                  </span>
                  <AnimatePresence mode="wait">
                    <m.div
                      key={capResults.capRate}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="font-display text-5xl font-semibold text-foreground tabular mt-2"
                    >
                      {capResults.capRate}%
                    </m.div>
                  </AnimatePresence>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-foreground/10">
                  <div>
                    <span
                      className={`block font-display text-xl font-bold ${capResults.monthlyCashFlow >= 0 ? "text-reef" : "text-red-600"}`}
                    >
                      {currency(capResults.monthlyCashFlow)}
                    </span>
                    <span className="text-sm text-foreground/65">
                      Est. Monthly Cash Flow
                    </span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-foreground">
                      {currency(capResults.noi)}
                    </span>
                    <span className="text-sm text-foreground/65">
                      Annual NOI
                    </span>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 panel p-8">
          <div>
            <h4 className="font-display text-2xl font-semibold text-ink">
              Want a ballpark for a specific address?
            </h4>
            <p className="text-ink/75">
              Try the interactive home value estimator below — plug in your own
              comps and see a range in seconds.
            </p>
          </div>
          <Link
            href="#cma"
            className="rounded-full px-7 py-3.5 bg-reef text-background font-semibold hover:opacity-90 transition whitespace-nowrap"
          >
            Get My Free CMA
          </Link>
        </div>
      </div>
    </section>
  );
}
