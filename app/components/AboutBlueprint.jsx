"use client";
import React from "react";
import {
  FaUserShield,
  FaBriefcase,
  FaMicrochip,
  FaArrowRight,
} from "react-icons/fa6";

const specifications = [
  {
    id: 1,
    icon: <FaUserShield />,
    title: "The Identity",
    content:
      "Decades of local immersion combined with a developer's eye. High-resolution views of Fort Walton Beach real estate are provided, ranging from zoning nuances to the long-term potential of specific coastal blocks.",
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    title: "The Work Ethic",
    content:
      "Built on high-pressure service and technical precision. The wrench and the brush have been traded for the code editor to build a more efficient way to move property.",
  },
  {
    id: 3,
    icon: <FaMicrochip />,
    title: "The Engine",
    content:
      "The 'Florida Real Estate Master Drill' serves as a proof of concept. Full-stack tools (Next.js/Node) are engineered to ensure the absolute highest level of preparation.",
  },
];

export default function AboutBlueprint() {
  return (
    <section
      className="bg-slate-950 py-24 border-t border-white/5 relative overflow-hidden"
      id="blueprint"
    >
      {/* Subtle background glow effects for depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Area */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-[0.3em] mb-4">
            [ Strategic Foundation ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            The Hybrid <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Advantage
            </span>
          </h3>
          <p className="mt-6 text-base font-sans text-slate-400 leading-relaxed">
            While technology is widely utilized across the industry, customized
            platforms are built directly from scratch here. This approach
            combines real estate licensure parameters with software engineering
            principles to deliver advanced analysis for the Fort Walton Beach
            market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specifications.map((spec) => (
            <div
              key={spec.id}
              className="relative p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] rounded-2xl hover:border-sky-500/30 hover:from-white/[0.05] transition-all duration-300 group shadow-2xl backdrop-blur-sm"
            >
              {/* Icon Container with dynamic hover effects */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sky-400 text-xl border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 group-hover:text-sky-300 transition-all duration-300 shadow-inner">
                {spec.icon}
              </div>

              <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                {spec.title}
              </h4>

              <p className="text-slate-400 font-sans leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                {spec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer System Log */}
        <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              L. Howard // System Active // FWB_FL
            </span>
          </div>
          <FaArrowRight className="text-slate-600 group-hover:text-sky-400 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
}
