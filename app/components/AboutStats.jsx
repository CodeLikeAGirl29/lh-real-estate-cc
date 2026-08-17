"use client";
import React, { useRef } from "react";
import { event as gaEvent } from "@/lib/gtag";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { m, useInView } from "framer-motion";

export default function AboutStats() {
  return (
    <div
      className="surface-section w-full min-h-screen flex items-center py-20 border-t border-foreground/5"
      id="stats"
    >
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-foreground/10 pb-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-5xl font-bold tracking-tight text-foreground">
              The <span className="text-reef">Professional</span> Spec
            </h2>
            <div className="flex gap-2 mt-2">
              <span className="w-16 h-[3px] bg-steel" />
              <span className="w-8 h-[3px] bg-steel" />
            </div>
            <p className="mt-4 text-xl text-foreground/60 font-medium">
              <span className="text-foreground">Fort Walton Beach, FL</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="frame px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-steel">
              Real Estate Sales Associate — eXp Realty
            </span>
            <span className="frame px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-steel">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-foreground">
              <FaLocationDot className="text-reef" /> Market Expertise
            </h3>
            <div className="space-y-5">
              <CredentialItem
                label="Florida Real Estate License"
                detail="Sales Associate — active with eXp Realty"
              />
              <CredentialItem
                label="Pre-Licensing Coursework"
                detail="State license law, federal regulations, property rights, titles, real estate finance"
              />
              <CredentialItem
                label="Local Market Focus"
                detail="Fort Walton Beach, Destin & Santa Rosa Beach — Okaloosa County"
              />
              <CredentialItem
                label="Property Analysis"
                detail="Comparative market data, zoning research, listing evaluation"
              />
            </div>

            <div className="mt-8 p-6 border border-foreground/10">
              <h4 className="font-display font-bold text-steel mb-2">
                Structural Insight
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                My background in residential painting and hands-on client
                service gives me a distinct advantage. I don&apos;t just see a
                house; I see its surfaces, finishes, and upkeep. I bring a
                tradesperson&apos;s eye for property condition to every client
                consultation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-foreground">
              <FaCode className="text-reef" /> Technical Infrastructure
            </h3>
            <div className="space-y-6">
              <SkillBar
                label="React / Next.js / Node"
                percentage="94%"
                description="Building custom Prop-Tech solutions"
              />
              <SkillBar
                label="Full-Stack Marketing"
                percentage="90%"
                description="SEO-optimized custom listing engines"
              />
              <SkillBar
                label="Database Management"
                percentage="80%"
                description="CRM integration & Lead Tracking"
              />
              <SkillBar
                label="Digital Security"
                percentage="85%"
                description="Ensuring safe, paperless transactions"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 border border-foreground/10">
                <span className="block font-display text-2xl font-bold text-foreground">
                  2026
                </span>
                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
                  Licensed &amp; Active
                </span>
              </div>
              <div className="p-4 border border-foreground/10">
                <span className="block font-display text-2xl font-bold text-foreground">
                  100%
                </span>
                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">
                  Digital-First
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-foreground/10">
          <div>
            <h4 className="font-display text-xl font-bold text-foreground">
              Ready to modernize your next transaction?
            </h4>
            <p className="text-foreground/60 text-sm">
              Let&apos;s discuss how my tech-forward approach benefits your
              listing.
            </p>
          </div>
          <div className="flex gap-4">
            <m.a
              href="/files/lindsey-howard-cv.pdf"
              download="Lindsey-Howard-CV.pdf"
              onClick={() =>
                gaEvent({
                  action: "download",
                  category: "engagement",
                  label: "cv_download",
                })
              }
              whileHover={{
                y: -3,
                boxShadow: "0 10px 24px -8px rgba(176,141,87,0.4)",
              }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 bg-reef text-background font-bold text-center"
            >
              Download CV
            </m.a>
            <m.a
              href="mailto:lindsey.howard.re@outlook.com?subject=Let's%20Talk%20Real%20Estate"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 text-steel font-bold hover:text-reef transition-colors text-center"
            >
              Contact Lindsey
            </m.a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredentialItem({ label, detail }) {
  return (
    <div className="flex items-start gap-3 border-l-2 border-reef/40 pl-4">
      <div>
        <span className="text-foreground font-display font-bold block">
          {label}
        </span>
        <span className="text-xs text-foreground/50 leading-relaxed">
          {detail}
        </span>
      </div>
    </div>
  );
}

function SkillBar({ label, percentage, description }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex flex-col gap-2 group">
      <div className="w-full flex justify-between font-bold items-end">
        <div>
          <span className="text-foreground block text-lg">{label}</span>
          <span className="text-xs text-foreground/40 font-medium tracking-wide italic">
            {description}
          </span>
        </div>
        <span className="text-steel text-xl font-display">{percentage}</span>
      </div>
      <div className="w-full bg-foreground/10 h-1.5 mt-1 overflow-hidden">
        <m.div
          className="h-full bg-steel"
          initial={{ width: "0%" }}
          animate={{ width: inView ? percentage : "0%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
