"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="charcoal-section relative lg:grid lg:h-screen lg:place-content-center overflow-hidden pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-reef blur-[130px] rounded-full pointer-events-none"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="mx-auto max-w-prose text-center">
            <motion.p
              variants={item}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel mb-6"
            >
              Okaloosa County, FL
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-3 sm:gap-8 mb-8"
            >
              <span className="frame flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FL Licensed
              </span>
              <span className="frame flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                eXp Realty — Active
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold text-foreground sm:text-6xl leading-[0.9] tracking-tight"
            >
              Closing,
              <br />
              <span className="italic text-reef">No Compromise.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 font-sans text-base text-pretty text-foreground/60 sm:text-xl/relaxed max-w-lg mx-auto"
            >
              Your goals are my mission. I approach every deal with{" "}
              <span className="text-steel font-mono">relentless focus</span> and
              determination, ensuring every step moves you closer to success.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 24px -8px rgba(176,141,87,0.4)",
                }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block rounded-md bg-reef px-10 py-4 text-sm font-bold text-background"
                href="#projects"
              >
                View Innovations
              </motion.a>
              <Link
                className="frame inline-block px-10 py-4 text-sm font-bold text-foreground transition-all hover:text-reef"
                href="/blog"
              >
                Read the Ledger
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
