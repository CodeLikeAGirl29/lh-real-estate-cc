"use client";
import React from 'react';
import { FaFingerprint, FaRoad, FaLaptopCode, FaArrowRight } from "react-icons/fa6";

const specifications = [
  {
    id: 1,
    icon: <FaFingerprint />,
    title: "The Identity",
    content: "Decades of local immersion combined with a developer's eye. I provide a high-resolution view of Fort Walton Beach real estate, from zoning nuances to the long-term potential of specific coastal blocks."
  },
  {
    id: 2,
    icon: <FaRoad />,
    title: "The Work Ethic",
    content: "Built on high-pressure service and technical precision. I’ve traded the wrench and the brush for the code editor to build a more efficient way to move property."
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "The Engine",
    content: "The 'Florida Real Estate Master Drill' is my proof of concept. I build full-stack tools (Next.js/Node) to ensure I am the most prepared agent in the room."
  }
];

export default function AboutBlueprint() {
  return (
    <section className="bg-gray-900 py-24 border-t border-white/5" id="blueprint">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header Area */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-mono font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">
            [ Strategic Foundation ]
          </h2>
          <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-none">
            The Hybrid <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Advantage</span>
          </h3>
          <p className="mt-6 text-lg font-sans text-gray-400 leading-relaxed">
            Most agents use technology. <span className="text-white border-b border-primary-500">I build it.</span> Combining real estate licensure with 5+ years of engineering to provide analysis that didn't exist in FWB until now.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specifications.map((spec) => (
            <div
              key={spec.id}
              className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500 text-white text-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {spec.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-tight">
                {spec.title}
              </h4>
              <p className="text-gray-400 font-sans leading-relaxed text-sm">
                {spec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer System Log */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              L. Howard // System Active // FWB_FL
            </span>
          </div>
          <FaArrowRight className="text-primary-500 animate-bounce-x" />
        </div>

      </div>
    </section>
  );
}