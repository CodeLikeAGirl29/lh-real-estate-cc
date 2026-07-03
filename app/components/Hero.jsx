"use client";
import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative bg-background lg:grid lg:h-screen lg:place-content-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500 blur-[120px] rounded-full opacity-20 pointer-events-none" />

        <div className="mx-auto w-screen max-w-7xl px-4 py-32 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-prose text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gulf mb-6">
              30.4013° N, 86.6188° W — Fort Walton Beach, FL
            </p>

            <div className="flex justify-center gap-3 mb-8">
              <span className="corner-marks flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FL Exam Passed
              </span>
              <span className="corner-marks flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Awaiting Sponsoring Broker
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold text-foreground sm:text-6xl leading-[0.9] tracking-tight">
              Closing,
              <br />
              <span className="italic text-signal">No Compromise.</span>
            </h1>

            <p className="mt-8 font-sans text-base text-pretty text-foreground/70 sm:text-xl/relaxed max-w-lg mx-auto">
              Your goals are my mission. I approach every deal with{" "}
              <span className="text-gulf font-mono">relentless focus</span> and
              determination, ensuring every step moves you closer to success.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                className="inline-block rounded-md bg-signal px-10 py-4 text-sm font-bold text-background transition-all hover:opacity-90 active:scale-95"
                href="#projects"
              >
                View Innovations
              </a>
              <Link
                className="corner-marks inline-block px-10 py-4 text-sm font-bold text-foreground transition-all hover:text-gulf"
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
