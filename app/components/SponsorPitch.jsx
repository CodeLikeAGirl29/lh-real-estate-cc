"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";
import { event as gaEvent } from "@/lib/gtag";

const pillars = [
  {
    icon: <FaRocket />,
    title: "Production-Ready, Not Green",
    content:
      "Exam passed and ready to start producing immediately. A background in high-volume sales already means comfort with cold outreach, objection handling, and closing under pressure — the transferable skills a new agent usually spends their first year building from scratch.",
  },
  {
    icon: <FaCode />,
    title: "A Built-In Tech Advantage",
    content:
      "This entire platform — the site, the blog, the lead capture, the market tools — was built from scratch, not templated. That same skill set can extend to the brokerage: custom landing pages, lead-routing tools, or internal dashboards for the wider team, not just personal listings.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Low-Risk, High-Upside",
    content:
      "No ramp-up cost on the marketing side — the tech stack, content engine, and lead funnel are already live and self-funded. A sponsoring broker isn't starting from zero; they're plugging into infrastructure that's already running.",
  },
];

export default function SponsorPitch() {
  return (
    <section
      className="charcoal-section py-24 border-t border-foreground/5"
      id="sponsor"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-mono font-bold text-steel uppercase tracking-[0.3em] mb-4">
            [ For Sponsoring Brokers ]
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Why Sponsor <span className="text-reef">Me</span>
          </h3>
          <p className="mt-6 text-base font-sans text-foreground/60 leading-relaxed">
            I&apos;m not asking a broker to take a chance on an unproven
            unknown. I&apos;m asking for a place to plug in production-ready
            sales experience, a live tech-forward marketing platform, and a
            genuine commitment to the Okaloosa County market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>

        {/*
          EDIT ME: Replace the bullet points below with your actual
          preferences — split range, in-office vs. remote, mentorship
          style, brokerage size/culture, etc. Keep it specific; brokers
          respond better to a clear ask than a vague one.
        */}
        <div className="frame p-8 border border-foreground/10 mb-16">
          <h4 className="font-display text-xl font-bold text-foreground mb-4">
            What I&apos;m Looking For
          </h4>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>A brokerage active in
              Okaloosa County / the Emerald Coast
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>
              Mentorship for a newly licensed agent&apos;s first transactions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>A culture that values
              agents bringing their own marketing edge
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>
              Room to grow into buyer and investor-focused business
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-reef/20 bg-surface/50">
          <div>
            <h4 className="font-display text-xl font-bold text-foreground">
              Let&apos;s talk sponsorship.
            </h4>
            <p className="text-foreground/60 text-sm mt-1">
              15 minutes is enough to know if it's a fit.
            </p>
          </div>
          <div className="flex gap-4">
            <motion.a
              href="mailto:lindsey.howard.re@outlook.com?subject=Sponsoring%20Broker%20Inquiry"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 24px -8px rgba(176,141,87,0.4)",
              }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 bg-reef text-background font-bold text-center flex items-center gap-2"
            >
              Start the Conversation <FaArrowRight />
            </motion.a>
            <motion.a
              href="/files/lindsey-howard-cv.pdf"
              download="Lindsey-Howard-Resume.pdf"
              onClick={() =>
                gaEvent({
                  action: "download",
                  category: "engagement",
                  label: "broker_resume_download",
                })
              }
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 text-steel font-bold hover:text-reef transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="frame p-8 border border-foreground/10 hover:border-reef/30 transition-colors duration-300"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.15, duration: 0.35 }}
        className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-foreground/10 text-reef text-xl"
      >
        {pillar.icon}
      </motion.div>
      <h4 className="font-display text-lg font-bold text-foreground mb-3 tracking-tight">
        {pillar.title}
      </h4>
      <p className="text-foreground/60 font-sans leading-relaxed text-sm">
        {pillar.content}
      </p>
    </motion.div>
  );
}
