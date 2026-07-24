"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const projects = [
  {
    id: "master-drill",
    title: "The Master Drill: Engineering a Smarter Way to Study",
    date: "May 2026",
    desc: "A full-stack study environment engineered from scratch using Next.js. Replaces passive flashcards with programmatic state tracking and logic-driven retention systems for the Florida real estate exam.",
    image: "/images/master-drill-ui.jpg",
    tags: "PropTech / Web Development",
  },
  {
    id: "shadow-slate",
    title: "Shadow + Slate: Engineering Interactive Space Curation",
    date: "May 2026",
    desc: "A highly responsive, interactive mood board canvas for real estate professionals and interior designers. Built with TypeScript and React Konva to enable fluid drag-and-drop mechanics and real-time spatial transformations.",
    image: "/images/shadow-slate-ui.jpg",
    tags: "PropTech / Interior Design",
  },
  {
    id: "okaloosa-guide",
    title: "Okaloosa Guide",
    date: "April 2026",
    desc: "A developer's deep dive into the Emerald Coast. From Spanish Villas to Shalimar, I explore the local infrastructure and structural standards that define our community.",
    image: "/images/local-coastline.jpg",
    tags: "Local Guide / Real Estate",
  },
  {
    id: "beyond-the-beach",
    title: "Beyond the Beach: The Blueprint",
    date: "March 2026",
    desc: "Moving past the aesthetics to analyze the data. An investment-focused breakdown of Okaloosa County's growth zones, rental yields, and Prop-Tech trends.",
    image: "/images/img-1.jpg",
    tags: "Investment / Data Analysis",
  },
  {
    id: "emerald-coast-insider",
    title: "The Emerald Coast Inside",
    date: "March 2026",
    desc: "Living 'Handled' in the Panhandle. A lifestyle guide featuring local hidden gems, the best bay-side launches, and navigating the FWB market with a developer's edge.",
    image: "/images/img-2.jpg",
    tags: "Lifestyle / Personal",
  },
];

export default function Collections() {
  return (
    <section
      className="charcoal-section py-24 border-t border-foreground/5"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Featured Collections
          </h2>
          <span className="mt-2 block h-[3px] w-12 bg-steel" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="frame overflow-hidden border border-foreground/10 bg-surface transition-colors duration-300 hover:border-reef/40 group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <time className="block font-mono text-xs text-steel font-bold uppercase tracking-widest">
                    {project.date}
                  </time>
                  <span className="font-mono text-[10px] border border-foreground/10 px-2 py-1 text-foreground/40 font-bold">
                    {project.tags}
                  </span>
                </div>

                <Link href={`/projects/${project.id}`}>
                  <h3 className="font-display text-xl font-bold text-foreground hover:text-reef transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm/relaxed text-foreground/60">
                  {project.desc}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 flex items-center gap-1 text-sm font-bold text-steel hover:text-reef transition-colors"
                >
                  View Project <span>&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
