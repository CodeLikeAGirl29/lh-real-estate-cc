"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaTag, FaEnvelope } from "react-icons/fa6";

export default function BlogPostClient({ post }) {
  return (
    <main className="bg-background min-h-screen selection:bg-steel/30">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full pt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
        <div className="relative z-10 flex h-full items-end pb-12 px-6 lg:px-24">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-reef mb-6 hover:text-foreground transition-colors font-bold text-xs uppercase tracking-widest"
            >
              <FaArrowLeft /> Back to the Ledger
            </Link>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-muted text-sm font-mono">
              <span className="flex items-center gap-2">
                <FaTag className="text-reef" /> {post.category}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-reef" /> {post.readTime}
              </span>
              <span className="text-reef font-bold">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 flex flex-col lg:flex-row gap-16">
        {/* Blog Body */}
        <div className="lg:w-2/3">{post.content}</div>

        {/* Sticky Sidebar CTA */}
        <aside className="lg:w-1/3">
          <div className="corner-marks sticky top-32 p-8 bg-surface border border-foreground/10 text-center">
            <div className="w-20 h-20 bg-reef text-background rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              LH
            </div>
            <h2 className="font-display text-foreground mb-2 text-xl font-bold">
              Lindsey Howard
            </h2>
            <p className="text-foreground/60 text-sm mb-6">
              Full-Stack Developer & Real Estate Associate specialized in
              Okaloosa County property logic.
            </p>
            <a href="mailto:lindsey.howard.re@outlook.com" className="block">
              <span className="w-full py-3 px-6 text-sm font-bold uppercase tracking-wide text-background bg-reef mb-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <FaEnvelope /> Let&apos;s Talk Property
              </span>
            </a>
            <p className="text-[10px] text-muted uppercase tracking-widest font-bold">
              Reimagining Real Estate
            </p>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
