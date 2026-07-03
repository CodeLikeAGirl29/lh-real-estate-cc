"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground pt-16 pb-8 px-4 tracking-wide border-t border-foreground/5">
      <div className="max-w-7xl mx-auto text-center">
        <ul className="flex gap-x-10 gap-y-4 justify-center flex-wrap mb-12 font-mono text-xs uppercase tracking-widest">
          <li>
            <a
              href="#about"
              className="text-foreground/60 hover:text-gulf transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-foreground/60 hover:text-gulf transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-foreground/60 hover:text-gulf transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="mailto:lindsey.howard.re@outlook.com"
              className="text-foreground/60 hover:text-gulf transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mt-12">
          <h6 className="font-mono text-xs text-foreground/50 tracking-widest uppercase">
            Connect
          </h6>

          <ul className="flex flex-wrap justify-center gap-8 mt-8">
            <li>
              <a
                href="https://github.com/codelikeagirl29"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/50 hover:text-gulf transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lindsey-howard"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/50 hover:text-gulf transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/lindsey.howard"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/50 hover:text-gulf transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-foreground/10 pt-8 mt-16">
          <p className="font-mono text-xs text-foreground/40">
            © {new Date().getFullYear()}{" "}
            <span className="text-gulf font-bold">L. HOWARD</span>
            {" — Built with Next.js & Tailwind CSS"}
          </p>
          <p className="font-mono text-[10px] text-foreground/30 mt-2 uppercase tracking-widest">
            Fort Walton Beach, Florida — Prop-Tech Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
