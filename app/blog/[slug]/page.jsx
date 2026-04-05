"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Typography, Button } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaTag, FaEnvelope } from "react-icons/fa6";

// This is your "Database". Add new guides here!
const blogPosts = {
  "okaloosa-insider": {
    title: "The Okaloosa Blueprint: Why Fort Walton Beach is the Panhandle's Best Kept Secret",
    date: "April 6, 2026",
    category: "Local Guide",
    readTime: "6 min read",
    image: "/images/fwb-pier.jpg",
    content: (
      <>
        <Typography className="mb-6 font-normal text-gray-400 text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-500 first-letter:mr-3 first-letter:float-left">
          When people think of the Florida Panhandle, they usually think of the neon lights of Destin. But for those of us who live and work here, **Fort Walton Beach** is the true engine of the Emerald Coast.
        </Typography>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">Investment Logic vs. Vacation Vibes</h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          As a developer, I look at property through the lens of infrastructure. Fort Walton Beach offers something Destin often lacks: **Stability**. With proximity to Eglin AFB and Hurlburt Field, the rental market here isn't just seasonal—it's year-round.
        </Typography>

        <div className="my-10 p-8 bg-indigo-500/5 border-l-4 border-indigo-500 rounded-r-xl">
          <Typography className="text-white italic font-serif text-xl leading-relaxed">
            "Don't just buy a view; buy a system. FWB properties, especially around the secondary residential tiers, offer the best CAP rates in Okaloosa County."
          </Typography>
        </div>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4">The 'Unit 6' Standard</h3>
        <Typography className="mb-6 text-gray-400 text-lg">
          Whether you're looking at **Spanish Villas** or new construction near Shalimar, you have to understand local compliance. My 'Master Drill' approach ensures that every property I represent meets the strict structural and legal standards required for long-term Florida ownership.
        </Typography>
      </>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white text-2xl font-bold">Post Not Found</div>;

  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full pt-20">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent" />
        <div className="relative z-10 flex h-full items-end pb-12 px-6 lg:px-24">
          <div className="max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-400 mb-6 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest">
              <FaArrowLeft /> Back to the Ledger
            </Link>
            <Typography variant="h1" className="text-4xl lg:text-6xl font-black text-white leading-tight mb-4">
              {post.title}
            </Typography>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm font-mono">
              <span className="flex items-center gap-2"><FaTag className="text-indigo-500" /> {post.category}</span>
              <span className="flex items-center gap-2"><FaClock className="text-indigo-500" /> {post.readTime}</span>
              <span className="text-indigo-400 font-bold">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 py-20 flex flex-col lg:flex-row gap-16">

        {/* Blog Body */}
        <div className="lg:w-2/3">
          {post.content}
        </div>

        {/* Sticky Sidebar CTA */}
        <aside className="lg:w-1/3">
          <div className="sticky top-32 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">LH</div>
            <Typography variant="h5" className="text-white mb-2">Lindsey Howard</Typography>
            <Typography className="text-gray-400 text-sm mb-6">
              Full-Stack Developer & Real Estate Associate specialized in Okaloosa County property logic.
            </Typography>
            <Button fullWidth className="bg-indigo-600 mb-4 flex items-center justify-center gap-2">
              <FaEnvelope /> Let's Talk Property
            </Button>
            <Typography className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Home, Handled.
            </Typography>
          </div>
        </aside>

      </section>

      <Footer />
    </main>
  );
}