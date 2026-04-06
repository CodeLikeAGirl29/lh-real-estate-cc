"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";

const posts = [
  {
    id: "okaloosa-insider",
    title: "The Okaloosa Guide: Structural Standards",
    excerpt: "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, we explore the local infrastructure and structural standards that define our community.",
    date: "April 6, 2026",
    category: "Local Guide",
    image: "/images/local-coastline.jpg"
  },
  {
    id: "beyond-the-beach",
    title: "Beyond the Beach: The Blueprint",
    excerpt: "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones and Prop-Tech trends.",
    date: "March 28, 2026",
    category: "Investment",
    image: "/images/img-1.jpg"
  },
  {
    id: "emerald-coast-insider",
    title: "Emerald Coast Insider: Living Handled",
    excerpt: "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating FWB with a developer's edge.",
    date: "March 15, 2026",
    category: "Lifestyle",
    image: "/images/img-3.jpg"
  },
  {
    id: "pensacola-pivot",
    title: "The Pensacola Pivot: Infrastructure and Innovation in 2026",
    category: "Market Analysis",
    date: "April 6, 2026",
    description: "Analyzing the $6.5M Gateway Project and the defense-driven growth of Florida's 'Cradle of Aviation'.",
    image: "/images/pensacola-header.jpg" // Ensure you add this image to your public/images folder
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white selection:bg-sky-500/30">
      <Navbar />

      {/* Hero Section for Blog */}
      <div className="relative isolate pt-24 pb-12 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-sky-600 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center mt-20 mb-16 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Insights & Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            The <span className="text-sky-500 italic">Digital</span> Ledger
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Where Florida Real Estate logic meets Full-Stack precision. Engineering the Emerald Coast lifestyle, one entry at a time.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-32">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-sky-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-sky-500 text-white text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                    <FaCalendarDays className="text-sky-500" /> {post.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform duration-300"
                >
                  Read Article <FaArrowRight className="text-sky-500" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}