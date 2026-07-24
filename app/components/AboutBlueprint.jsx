"use client";
import React from "react";
import {
  FaUserShield,
  FaBriefcase,
  FaMicrochip,
  FaArrowRight,
} from "react-icons/fa6";
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

const specifications = [
  {
    id: 1,
    icon: <FaUserShield />,
    title: "The Identity",
    content:
      "Decades of local immersion combined with a developer's eye. High-resolution views of Fort Walton Beach real estate are provided, ranging from zoning nuances to the long-term potential of specific coastal blocks.",
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    title: "The Work Ethic",
    content:
      "Built on high-pressure service and technical precision. The wrench and the brush have been traded for the code editor to build a more efficient way to move property.",
  },
  {
    id: 3,
    icon: <FaMicrochip />,
    title: "The Engine",
    content:
      "The 'Florida Real Estate Master Drill' serves as a proof of concept. Full-stack tools (Next.js/Node) are engineered to ensure the absolute highest level of preparation.",
  },
];

export default function AboutBlueprint() {
  return (
    <section
      className="surface-section py-24 border-t border-foreground/5 relative overflow-hidden"
      id="blueprint"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-xs font-mono font-bold text-steel uppercase tracking-[0.3em] mb-4">
            [ Strategic Foundation ]
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase leading-tight">
            The Hybrid <br />
            <span className="text-reef">Advantage</span>
          </h3>
          <p className="mt-6 text-base font-sans text-foreground/60 leading-relaxed">
            While technology is widely utilized across the industry, customized
            platforms are built directly from scratch here. This approach
            combines real estate licensure parameters with software engineering
            principles to deliver advanced analysis for the Fort Walton Beach
            market.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specifications.map((spec) => (
            <motion.div
              key={spec.id}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="frame p-8 border border-foreground/10 hover:border-reef/30 transition-colors duration-300 group"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-foreground/10 text-reef text-xl group-hover:border-reef/40 transition-colors duration-300">
                {spec.icon}
              </div>

              <h4 className="font-display text-lg font-bold text-foreground mb-3 tracking-tight">
                {spec.title}
              </h4>

              <p className="text-foreground/60 font-sans leading-relaxed text-sm">
                {spec.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex items-center justify-between border-t border-foreground/5 pt-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-reef animate-pulse" />
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
              L. Howard // System Active // FWB_FL
            </span>
          </div>
          <FaArrowRight className="text-foreground/30 group-hover:text-reef transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
}
