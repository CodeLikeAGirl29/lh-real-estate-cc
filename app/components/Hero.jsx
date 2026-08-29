"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import {
  Search,
  TrendingUp,
  Home as HomeIcon,
  Clock,
  Sparkles,
  MapPin,
} from "lucide-react";
import CornerArrow from "./CornerArrow";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const marketStats = [
  { icon: TrendingUp, label: "Median Price", value: "$440,000" },
  { icon: Clock, label: "Avg Days on Market", value: "32 Days" },
  { icon: HomeIcon, label: "Market Activity", value: "High Demand" },
];

export default function Hero() {
  const [address, setAddress] = useState("");

  const handleValuationSubmit = (e) => {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;
    try {
      sessionStorage.setItem("cma_address", trimmed);
    } catch {}
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="charcoal-section relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32 border-b border-muted/20"
    >
      {/* Background Ambience Glow */}
      <div
        className="absolute -top-36 -right-36 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: "var(--reef)" }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "var(--steel)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* Left Column — Copy + Valuation Form */}
          <m.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Eyebrow Badge */}
            <m.div
              variants={item}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-reef/40 bg-reef/10 text-reef text-xs font-mono font-medium tracking-wider uppercase mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Emerald Coast Real Estate</span>
            </m.div>

            {/* Main Headline */}
            <m.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.08] text-foreground"
            >
              Passion. Persistence.
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-reef to-steel">
                Properties.
              </span>
            </m.h1>

            {/* Subtitle */}
            <m.p
              variants={item}
              className="mt-5 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
            >
              Your goals are my mission. I approach every deal with relentless
              focus and determination, ensuring every step moves you closer to
              success.
            </m.p>

            {/* Valuation Lead Capture Form (Framed) */}
            <m.form
              variants={item}
              onSubmit={handleValuationSubmit}
              className="mt-8 max-w-xl"
            >
              <div className="frame flex flex-col sm:flex-row gap-3 p-2 bg-surface rounded-xl border border-muted/20 shadow-2xl">
                <div className="relative flex-grow flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-muted pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Enter your property address..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-transparent text-foreground placeholder-muted focus:outline-none text-sm font-sans"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-lg bg-reef hover:brightness-110 active:scale-[0.98] text-foreground font-semibold text-sm transition-all duration-150 shadow-md shadow-reef/20 flex items-center justify-center shrink-0 cursor-pointer"
                >
                  Get CMA
                </button>
              </div>
            </m.form>

            <m.p variants={item} className="mt-3 text-xs text-muted font-mono">
              *No obligation. Accurate valuations backed by verified local MLS
              data.
            </m.p>

            {/* Trust Strip */}
            <m.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted"
            >
              <span>eXp Realty</span>
              <span className="h-3 w-px bg-muted/30" />
              <span>Okaloosa County, FL</span>
              <span className="h-3 w-px bg-muted/30" />
              <span>MLS-Verified Data</span>
            </m.div>
          </m.div>

          {/* Right Column — Framed Visual */}
          <div className="lg:col-span-5">
            <m.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative max-w-md mx-auto"
            >
              {/* Framed coastline photo */}
              <div className="frame relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-muted/20 shadow-2xl">
                <Image
                  src="/images/hero-img.png"
                  alt="Aerial view of the turquoise Emerald Coast waters near Fort Walton Beach, FL"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 448px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/10 pointer-events-none" />
                <CornerArrow />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-foreground/10 text-foreground text-[11px] font-mono uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-reef" />
                  <span>Fort Walton Beach, FL</span>
                </div>
              </div>

              {/* Floating Live Market Snapshot Card */}
              <div className="frame relative mt-6 w-full bg-surface/95 backdrop-blur-md border border-muted/20 rounded-xl shadow-2xl p-5">
                <p className="text-[11px] font-mono uppercase tracking-widest text-reef mb-4">
                  Live Market Snapshot
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {marketStats.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start gap-2 min-w-0"
                    >
                      <div className="p-2 rounded-md bg-reef/10 border border-reef/30 text-reef shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted uppercase font-mono tracking-wider leading-tight">
                          {label}
                        </p>
                        <p className="text-sm font-bold text-foreground font-mono truncate">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
