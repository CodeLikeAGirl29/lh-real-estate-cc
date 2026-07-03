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
      className="bg-background py-24 border-t border-foreground/5 relative overflow-hidden"
      id="blueprint"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs font-mono font-bold text-gulf uppercase tracking-[0.3em] mb-4">
            [ Strategic Foundation ]
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase leading-tight">
            The Hybrid <br />
            <span className="text-signal">Advantage</span>
          </h3>
          <p className="mt-6 text-base font-sans text-foreground/60 leading-relaxed">
            While technology is widely utilized across the industry, customized
            platforms are built directly from scratch here. This approach
            combines real estate licensure parameters with software engineering
            principles to deliver advanced analysis for the Fort Walton Beach
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specifications.map((spec) => (
            <div
              key={spec.id}
              className="corner-marks p-8 border border-foreground/10 hover:border-gulf/40 transition-colors duration-300 group"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-foreground/10 text-gulf text-xl group-hover:border-gulf/40 group-hover:text-signal transition-colors duration-300">
                {spec.icon}
              </div>

              <h4 className="font-display text-lg font-bold text-foreground mb-3 tracking-tight">
                {spec.title}
              </h4>

              <p className="text-foreground/60 font-sans leading-relaxed text-sm">
                {spec.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-foreground/5 pt-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
              L. Howard // System Active // FWB_FL
            </span>
          </div>
          <FaArrowRight className="text-foreground/30 group-hover:text-gulf transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
}
