"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutStats from "../components/AboutStats";
import AboutBlueprint from "../components/AboutBlueprint";
import { Typography } from "@material-tailwind/react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Typography
            variant="h1"
            className="text-5xl md:text-7xl font-display text-white mb-6"
          >
            The Agent <span className="text-sky-500">+</span> The Architect
          </Typography>
          <Typography className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            I don’t just show properties; I analyze the data, understand the
            structure, and engineer a seamless transition for every client.
          </Typography>
        </div>
      </div>

      <AboutStats />

      {/* Main Content Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-sky-500 pl-6">
              My Mission:{" "}
              <span className="text-sky-400">Strategy Meets Home.</span>
            </h2>
            <Typography className="text-gray-400 text-lg mb-6 leading-relaxed">
              With a background in{" "}
              <span className="text-sky-400">high-volume sales</span> and{" "}
              <span className="text-sky-400">web development</span>, I bring a
              unique perspective to the Florida Panhandle market. I believe real
              estate should be high-tech but high-touch—where every detail is
              managed with the precision of a codebase.
            </Typography>
            <Typography className="text-gray-400 text-lg mb-8 leading-relaxed">
              Currently based in{" "}
              <span className="text-indigo-400">Fort Walton Beach</span>, I am
              preparing to bridge the gap between traditional service and modern
              digital intelligence.
            </Typography>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sky-400 text-sm font-bold uppercase tracking-widest">
                Client-First Logic
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sky-400 text-sm font-bold uppercase tracking-widest">
                Data-Driven Marketing
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sky-400 text-sm font-bold uppercase tracking-widest">
                Structural Integrity
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-800">
              {/* Replace with your professional headshot */}
              <img
                src="/images/lindsey-profile.jpg"
                alt="Lindsey Howard"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      <AboutBlueprint />
      <Footer />
    </main>
  );
}
