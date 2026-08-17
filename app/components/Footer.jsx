"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { m } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="charcoal-section pt-16 pb-8 px-4 tracking-wide border-t border-muted/10 relative overflow-hidden">
      {/* Architectural Grid Accent - highly transparent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8A8D9305_1px,transparent_1px),linear-gradient(to_bottom,#8A8D9305_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Navigation Links */}
        <ul className="flex gap-x-10 gap-y-6 justify-center flex-wrap mb-12 font-mono text-xs uppercase tracking-widest">
          <li>
            <Link
              href="/about"
              className="text-muted hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-steel hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-muted hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-steel hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="text-muted hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-steel hover:after:w-full after:transition-all after:duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="mailto:lindsey.howard.re@outlook.com"
              className="text-muted hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-steel hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Connections */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-muted/20"></div>
            <h6 className="font-mono text-xs text-muted/60 tracking-widest uppercase">
              Connect
            </h6>
            <div className="h-px w-8 bg-muted/20"></div>
          </div>

          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <m.a
                href="https://github.com/codelikeagirl29"
                target="_blank"
                rel="noreferrer"
                className="block text-muted hover:text-reef"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaGithub className="w-6 h-6" />
              </m.a>
            </li>
            <li>
              <m.a
                href="https://linkedin.com/in/lindsey-howard"
                target="_blank"
                rel="noreferrer"
                className="block text-muted hover:text-steel"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </m.a>
            </li>
            <li>
              <m.a
                href="https://www.facebook.com/lindseyhowardrealestate"
                target="_blank"
                rel="noreferrer"
                className="block text-muted hover:text-reef"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaFacebook className="w-6 h-6" />
              </m.a>
            </li>
          </ul>
        </div>

        {/* Legal & Location */}
        <div className="border-t border-muted/10 pt-8 mt-16 flex flex-col items-center gap-2">
          <p className="font-mono text-xs text-muted">
            © {currentYear}{" "}
            <span className="text-reef font-bold">by LINDSEY HOWARD</span>
            {" — Built with Next.js & Tailwind CSS"}
          </p>
          <p className="font-mono text-[10px] text-muted/50 uppercase tracking-widest">
            Fort Walton Beach, Florida — Real Estate Sales Professional
          </p>
        </div>
      </div>
    </footer>
  );
}
