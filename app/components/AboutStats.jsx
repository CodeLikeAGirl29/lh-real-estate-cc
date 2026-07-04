"use client";
import React, { useRef } from "react";
import { event as gaEvent } from "@/lib/gtag";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

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
              The <span className="text-brass">Professional</span> Spec
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
              Real Estate Sales Associate (Exam Passed)
            </span>
            <span className="frame px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-steel">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-foreground">
              <FaLocationDot className="text-brass" /> Market Expertise
            </h3>
            <div className="space-y-6">
              <SkillBar
                label="Florida Real Estate Law"
                percentage="95%"
                description="Unit 6 Specialist & Regulatory Compliance"
              />
              <SkillBar
                label="Property Valuation"
                percentage="88%"
                description="Comparative Market Analysis & Data Logic"
              />
              <SkillBar
                label="Local Market Knowledge"
                percentage="92%"
                description="Fort Walton Beach & Panhandle Specialist"
              />
              <SkillBar
                label="Contract Negotiation"
                percentage="85%"
                description="Strategic Advocacy & Mechanical Detail"
              />
            </div>

            <div className="mt-8 p-6 border border-foreground/10">
              <h4 className="font-display font-bold text-steel mb-2">
                Structural Insight
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                My background in automotive technology and residential painting
                gives me a distinct advantage. I don&apos;t just see a house; I
                see its systems. I bring a hands-on understanding of property
                maintenance to every client consultation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-foreground">
              <FaCode className="text-brass" /> Technical Infrastructure
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
                  Exam Passed
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
            <motion.a
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
              className="frame px-8 py-3 bg-brass text-background font-bold text-center"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 text-steel font-bold hover:text-brass transition-colors"
            >
              Contact Lindsey
            </motion.button>
          </div>
        </div>
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
        <motion.div
          className="h-full bg-steel"
          initial={{ width: "0%" }}
          animate={{ width: inView ? percentage : "0%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
