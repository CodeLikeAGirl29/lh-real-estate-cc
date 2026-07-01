"use client";
import React from "react";
import { FaCode, FaLocationDot } from "react-icons/fa6";

export default function AboutStats() {
  return (
    <div
      className="w-full min-h-screen flex items-center bg-gray-900 py-20"
      id="stats"
    >
      <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-8 text-white">
        {/* Header with Local Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-display font-bold tracking-tight">
              The <span className="text-sky-500">Professional</span> Spec
            </h2>
            <div className="flex gap-2 mt-2">
              <span className="w-16 h-[4px] bg-sky-500 rounded"></span>
              <span className="w-8 h-[4px] bg-sky-500 rounded"></span>
            </div>
            <p className="mt-4 text-xl text-gray-400 font-medium">
              <span className="text-white">Fort Walton Beach, FL</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-sky-400">
              Real Estate Sales Associate (Exam Passed)
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-sky-400">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          {/* Left Column: Real Estate Core */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <FaLocationDot className="text-sky-500" /> Market Expertise
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

            <div className="mt-8 p-6 bg-sky-600/10 rounded-2xl border border-sky-500/20">
              <h4 className="font-bold text-sky-400 mb-2">
                Structural Insight
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                My background in automotive technology and residential painting
                gives me a distinct advantage. I don't just see a house; I see
                its systems. I bring a hands-on understanding of property
                maintenance to every client consultation.
              </p>
            </div>
          </div>

          {/* Right Column: Tech Infrastructure */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <FaCode className="text-sky-500" /> Technical Infrastructure
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
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="block text-2xl font-bold text-white">
                  2026
                </span>
                <span className="text-xs text-gray-500 uppercase font-black">
                  Exam Passed
                </span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="block text-2xl font-bold text-white">
                  100%
                </span>
                <span className="text-xs text-gray-500 uppercase font-black">
                  Digital-First
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
          <div>
            <h4 className="text-xl font-bold">
              Ready to modernize your next transaction?
            </h4>
            <p className="text-gray-400 text-sm">
              Let's discuss how my tech-forward approach benefits your listing.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-sky-600 hover:bg-sky-500 rounded-full font-bold transition">
              Download CV
            </button>
            <button className="px-8 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white rounded-full font-bold transition">
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
          <span className="text-gray-100 block text-lg">{label}</span>
          <span className="text-xs text-gray-500 font-medium tracking-wide italic">
            {description}
          </span>
        </div>
        <span className="text-sky-400 text-xl font-display">{percentage}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 mt-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-600 to-sky-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(14,165,233,0.4)]"
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}
