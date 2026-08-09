"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { event as gaEvent } from "@/lib/gtag";
import {
  FaArrowLeft,
  FaMapLocationDot,
  FaUmbrellaBeach,
} from "react-icons/fa6";

export default function ProjectPostClient({ project }) {
  return (
    <main className="bg-background min-h-screen selection:bg-steel/30">
      <Navbar />

      <section className="p-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-screen-md">
          {/* Breadcrumb */}
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-reef mb-8 font-mono text-[10px] font-bold uppercase tracking-widest hover:text-foreground transition-colors"
          >
            <FaArrowLeft /> Back to Collections
          </Link>

          {/* Featured Image */}
          <div className="relative h-[25rem] w-full mb-10 overflow-hidden border border-muted/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Tags */}
          <div className="mb-6 font-mono text-[10px] font-bold uppercase tracking-widest text-reef">
            {project.tags}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {project.title}
          </h1>

          {/* Metadata Badges */}
          <div className="flex gap-4 mb-12">
            <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted border border-muted/20 px-3 py-1 bg-surface">
              <FaMapLocationDot className="text-reef" /> Okaloosa County, FL
            </span>
            <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted border border-muted/20 px-3 py-1 bg-surface">
              <FaUmbrellaBeach className="text-reef" /> Emerald Coast
            </span>
          </div>

          {/* Content Body */}
          <div className="text-foreground/80 text-lg leading-relaxed space-y-8">
            {project.content}
          </div>

          {/* Travel Guide Call to Action */}
          <div className="mt-20 p-8 border border-reef/20 bg-surface/50 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">
              Planning a move to the Panhandle?
            </h4>
            <p className="text-muted text-sm mb-8 max-w-sm">
              Get the technical breakdown on the best neighborhoods, school
              districts, and investment zones in Okaloosa County.
            </p>
            <a
              href="/files/local-insider-guide.pdf"
              download="Fort-Walton-Beach-Local-Insider-Guide.pdf"
              onClick={() =>
                gaEvent({
                  action: "download",
                  category: "engagement",
                  label: "insider_guide_download",
                })
              }
            >
              <button className="px-8 py-3 bg-reef text-background font-mono text-xs font-bold uppercase tracking-widest hover:bg-steel transition-colors flex items-center gap-2">
                Get My Local Insider Guide <FaMapLocationDot />
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
