"use client";
import React, { useRef } from "react";
import { m, useInView } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";
import { event as gaEvent } from "@/lib/gtag";
import CornerArrow from "./CornerArrow";

const pillars = [
  {
    icon: <FaRocket />,
    title: "Coachable, Not Green",
    content:
      "Licensed and active with eXp, ready to put in the reps. A background in high-volume sales already means comfort with cold outreach, objection handling, and closing under pressure — the transferable skills a new agent usually spends their first year building from scratch.",
  },
  {
    icon: <FaCode />,
    title: "A Built-In Tech Advantage",
    content:
      "This entire platform — the site, the blog, the lead capture, the market tools — was built from scratch, not templated. That same skill set is an asset to a mentor's business too: custom landing pages, listing marketing, or lead-routing tools, not just personal projects.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Low-Effort, High-Upside",
    content:
      "No ramp-up needed on the marketing side — the tech stack, content engine, and lead funnel are already live and self-funded. Mentoring me isn't starting from zero; it's plugging guidance into infrastructure that's already running.",
  },
];

export default function SponsorPitch() {
  return (
    <section
      className="charcoal-section py-24 border-t border-foreground/5"
      id="mentor"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono font-bold text-steel uppercase tracking-[0.3em] mb-4">
            [ For Prospective Mentors ]
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Why Mentor <span className="text-reef">Me</span>
          </h2>
          <p className="mt-6 text-base font-sans text-foreground/60 leading-relaxed">
            I&apos;m not asking for a hand-holder through every basic step.
            I&apos;m looking for a producing eXp agent willing to sharpen my
            first few transactions — in exchange, you get an agent who
            already brings production-ready sales experience, a live
            tech-forward marketing platform, and a genuine commitment to the
            Okaloosa County market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>

        {/*
          EDIT ME: Replace the bullet points below with your actual
          mentor preferences — communication style, hands-on vs.
          advisory, luxury exposure, etc. Keep it specific; agents
          respond better to a clear ask than a vague one.
        */}
        <div className="frame p-8 border border-foreground/10 mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            What I&apos;m Looking For
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>An eXp agent active in
              Okaloosa County / the Emerald Coast
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>
              Hands-on guidance through my first few transactions —
              contracts, disclosures, negotiation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>A mentor who values
              agents bringing their own marketing edge
            </li>
            <li className="flex items-start gap-2">
              <span className="text-reef mt-1">—</span>
              Exposure to the luxury/higher-end side of the market as I grow
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-reef/20 bg-surface/50">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Let&apos;s talk mentorship.
            </h3>
            <p className="text-foreground/60 text-sm mt-1">
              15 minutes is enough to know if it&apos;s a fit.
            </p>
          </div>
          <div className="flex gap-4">
            <m.a
              href="mailto:lindsey.howard.re@outlook.com?subject=eXp%20Mentorship%20Inquiry"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 24px -8px rgba(176,141,87,0.4)",
              }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 bg-reef text-background font-bold text-center flex items-center gap-2"
            >
              Start the Conversation <FaArrowRight />
            </m.a>
            <m.a
              href="/files/lindsey-howard-cv.pdf"
              download="Lindsey-Howard-Resume.pdf"
              onClick={() =>
                gaEvent({
                  action: "download",
                  category: "engagement",
                  label: "mentor_resume_download",
                })
              }
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="frame px-8 py-3 text-steel font-bold hover:text-reef transition-colors"
            >
              Download Resume
            </m.a>
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
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 28px -10px rgba(20,143,126,0.35)",
      }}
      className="frame relative p-8 border border-foreground/10 transition-[colors,filter] duration-300 hover:border-reef/30 hover:brightness-110"
    >
      <CornerArrow />
      <m.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.15, duration: 0.35 }}
        className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-foreground/10 text-reef text-xl"
      >
        {pillar.icon}
      </m.div>
      <h3 className="font-display text-lg font-bold text-foreground mb-3 tracking-tight">
        {pillar.title}
      </h3>
      <p className="text-foreground/60 font-sans leading-relaxed text-sm">
        {pillar.content}
      </p>
    </m.div>
  );
}
