"use client";
import React from 'react';
import { FaFingerprint, FaRoad, FaLaptopCode, FaArrowRight } from "react-icons/fa6";

const specifications = [
  {
    id: 1,
    icon: <FaFingerprint />,
    title: "The Identity",
    content: "A 35-year-old Panhandle local who knows that Unit 6 in Spanish Villas is on the second floor. I don't just live in Fort Walton Beach; I understand its infrastructure."
  },
  {
    id: 2,
    icon: <FaRoad />,
    title: "The Work Ethic",
    content: "From the high-pressure morning shifts at Burger King to mastering the fine details of residential painting, I’ve traded the brush and wrench for the code editor to build a smarter way to move property."
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "The Engine",
    content: "The 'Florida Real Estate Master Drill' isn't just a project—it's proof. I build full-stack tools (Next.js/Node) that ensure I am the most prepared agent in the room."
  }
];

export default function AboutBlueprint() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32 border-y border-gray-200" id="blueprint">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: The Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
              Strategic Foundation
            </div>
            <h2 className="text-5xl font-serif font-bold text-gray-900 leading-[1.1]">
              The <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Hybrid</span> <br />
              Advantage
            </h2>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Most agents use technology. <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">I build it</span>. By combining my Florida Real Estate licensure prep with 5+ years of mechanical and software engineering, I offer a level of property analysis that simply didn't exist in Fort Walton Beach until now.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3 overflow-hidden">
                {/* Visual representation of your "Triple Threat" skills */}
                <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">RE</div>
                <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white bg-slate-800 flex items-center justify-center text-white font-bold text-xs">JS</div>
                <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white bg-indigo-400 flex items-center justify-center text-white font-bold text-xs">MECH</div>
              </div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-tighter">
                Triple-Threat Methodology
              </span>
            </div>
          </div>

          {/* Right Side: The Technical Breakdown */}
          <div className="lg:col-span-7 grid gap-6">
            {specifications.map((spec) => (
              <div
                key={spec.id}
                className="group flex flex-col md:flex-row gap-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.title}</h3>
                  <p className="text-gray-500 leading-7">
                    {spec.content}
                  </p>
                </div>
              </div>
            ))}

            {/* The "Blueprint" Footer Tag */}
            <div className="mt-4 flex items-center justify-between px-4 py-3 bg-slate-900 rounded-lg">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em]">
                System Log: Lindsey Howard // Portfolio Ver. 2026.04
              </span>
              <FaArrowRight className="text-indigo-400 size-3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}