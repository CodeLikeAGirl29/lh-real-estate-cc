"use client";
import React from "react";
import { event as gaEvent } from "@/lib/gtag";
import { FaCode, FaLocationDot } from "react-icons/fa6";

export default function AboutStats() {
  return (
    <div
      className="w-full min-h-screen flex items-center paper-section py-20"
      id="stats"
    >
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/10 pb-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-5xl font-bold tracking-tight text-ink">
              The <span className="text-signal">Professional</span> Spec
            </h2>
            <div className="flex gap-2 mt-2">
              <span className="w-16 h-[3px] bg-gulf" />
              <span className="w-8 h-[3px] bg-gulf" />
            </div>
            <p className="mt-4 text-xl text-ink/60 font-medium">
              <span className="text-ink">Fort Walton Beach, FL</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="corner-marks px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-gulf">
              Real Estate Sales Associate (Exam Passed)
            </span>
            <span className="corner-marks px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-gulf">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-ink">
              <FaLocationDot className="text-signal" /> Market Expertise
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

            <div className="mt-8 p-6 border border-ink/10">
              <h4 className="font-display font-bold text-gulf mb-2">
                Structural Insight
              </h4>
              <p className="text-sm text-ink/70 leading-relaxed">
                My background in automotive technology and residential painting
                gives me a distinct advantage. I don't just see a house; I see
                its systems. I bring a hands-on understanding of property
                maintenance to every client consultation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-display text-2xl font-bold flex items-center gap-3 text-ink">
              <FaCode className="text-signal" /> Technical Infrastructure
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
              <div className="p-4 border border-ink/10">
                <span className="block font-display text-2xl font-bold text-ink">
                  2026
                </span>
                <span className="font-mono text-[10px] text-ink/50 uppercase tracking-widest">
                  Exam Passed
                </span>
              </div>
              <div className="p-4 border border-ink/10">
                <span className="block font-display text-2xl font-bold text-ink">
                  100%
                </span>
                <span className="font-mono text-[10px] text-ink/50 uppercase tracking-widest">
                  Digital-First
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-ink/10">
          <div>
            <h4 className="font-display text-xl font-bold text-ink">
              Ready to modernize your next transaction?
            </h4>
            <p className="text-ink/60 text-sm">
              Let&apos;s discuss how my tech-forward approach benefits your
              listing.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="corner-marks px-8 py-3 bg-signal text-paper font-bold hover:opacity-90 transition">
              <a
                href="/files/lindsey-howard-cv.pdf"
                download="Lindsey-Howard-CV.pdf"
                onClick={() =>
                  gaEvent({
                    action: "download",
                    category: "engagement",
                    label: "cv_download",
                  })
                }
                className="corner-marks px-8 py-3 bg-signal text-paper font-bold hover:opacity-90 transition"
              >
                Download CV
              </a>
            </button>
            <button className="corner-marks px-8 py-3 text-gulf font-bold hover:text-signal transition">
              Contact Lindsey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ label, percentage, description }) {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="w-full flex justify-between font-bold items-end">
        <div>
          <span className="text-ink block text-lg">{label}</span>
          <span className="text-xs text-ink/50 font-medium tracking-wide italic">
            {description}
          </span>
        </div>
        <span className="text-gulf text-xl font-display">{percentage}</span>
      </div>
      <div className="w-full bg-ink/10 h-1.5 mt-1 overflow-hidden">
        <div
          className="h-full bg-gulf transition-all duration-1000 ease-out"
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
}
