// blog/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const posts = [
  {
    id: "okaloosa-insider",
    title: "The Okaloosa Guide: Structural Standards",
    excerpt:
      "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, we explore the local infrastructure and structural standards that define our community.",
    date: "April 6, 2026",
    category: "Local Guide",
    image: "/images/local-coastline.jpg",
  },
  {
    id: "beyond-the-beach",
    title: "Beyond the Beach: The Blueprint",
    excerpt:
      "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones and Prop-Tech trends.",
    date: "March 28, 2026",
    category: "Investment",
    image: "/images/img-1.jpg",
  },
  {
    id: "emerald-coast-insider",
    title: "Emerald Coast Insider: Living Handled",
    excerpt:
      "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating FWB with a developer's edge.",
    date: "March 15, 2026",
    category: "Lifestyle",
    image: "/images/img-3.jpg",
  },
  {
    id: "pensacola-pivot",
    title: "The Pensacola Pivot: Infrastructure and Innovation in 2026",
    category: "Market Analysis",
    date: "April 6, 2026",
    excerpt:
      "Analyzing the $6.5M Gateway Project and the defense-driven growth of Florida's 'Cradle of Aviation'.",
    image: "/images/pensacola-header.jpg",
  },
];

export default function BlogPageClient() {
  return (
    <main className="charcoal-section min-h-screen selection:bg-steel/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-6 lg:px-8 border-b border-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto text-center mt-12 mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-steel/10 text-steel font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
            Insights & Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            The <span className="text-reef italic">Digital</span> Ledger
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Where Florida Real Estate logic meets Full-Stack precision.
            Engineering the Emerald Coast lifestyle, one entry at a time.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="charcoal-section py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group frame surface-section flex flex-col border border-muted/10 hover:border-reef/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative border-b border-muted/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-5 pb-5 border-b border-muted/10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-reef">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-2 text-muted text-[11px] font-mono uppercase tracking-widest">
                    <FaCalendarDays className="text-muted/50" /> {post.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-reef transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-steel transition-colors"
                >
                  Read Article{" "}
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
