"use client";
import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900 overflow-hidden">
        {/* Optional: Subtle background accent for that "Dev" feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500 blur-[120px] rounded-full"></div>
        </div>

        <div className="mx-auto w-screen max-w-7xl px-4 py-32 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-prose text-center">
            {/* Tagline / Sub-header */}
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Lindsey Howard
            </span>

            {/* Exam Passed Callout */}
            <div className="flex justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FL Exam Passed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Awaiting Sponsoring Broker
              </span>
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-6xl dark:text-white leading-[0.9] tracking-tighter">
              Closing,
              <br />
              <span className="text-sky-600 italic">No Compromise.</span>
            </h1>

            <p className="mt-8 text-base text-pretty text-gray-700 sm:text-xl/relaxed dark:text-gray-400 max-w-lg mx-auto">
              Your goals are my mission. I approach every deal with{" "}
              <span className="text-sky-400 font-mono">relentless focus</span>{" "}
              and determination, ensuring every step moves you closer to
              success.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* Primary Action */}
              <a
                className="inline-block rounded-full bg-sky-600 px-10 py-4 text-sm font-bold text-white shadow-xl shadow-sky-500/20 transition-all hover:bg-sky-700 hover:scale-105 active:scale-95 focus:ring-blue-500"
                href="#projects"
              >
                View Innovations
              </a>

              {/* Secondary Action */}
              <Link
                className="inline-block rounded-full border border-gray-200 dark:border-gray-700 px-10 py-4 text-sm font-bold text-gray-700 dark:text-gray-200 transition-all hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                href="/blog"
              >
                Read the Ledger
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
