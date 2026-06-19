"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 tracking-wide border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Navigation Links */}
        <ul className="flex gap-x-10 gap-y-4 justify-center flex-wrap mb-12">
          <li>
            <a
              href="#about"
              className="text-[15px] text-slate-400 hover:text-sky-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[15px] text-slate-400 hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-[15px] text-slate-400 hover:text-sky-400 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="mailto:lindseykdev@gmail.com"
              className="text-[15px] text-slate-400 hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mt-12">
          <h6 className="text-[15px] text-slate-400 font-medium tracking-widest uppercase">
            Connect with me!
          </h6>

          {/* Social Icons - Using React-Icons for consistency */}
          <ul className="flex flex-wrap justify-center gap-8 mt-8">
            <li>
              <a
                href="https://github.com/codelikeagirl29"
                target="_blank"
                rel="noreferrer"
                className="block transform hover:scale-110 transition-transform"
              >
                <FaGithub className="w-8 h-8 text-white hover:text-sky-400" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lindsey-howard"
                target="_blank"
                rel="noreferrer"
                className="block transform hover:scale-110 transition-transform"
              >
                <FaLinkedin className="w-8 h-8 text-[#007ab9] hover:brightness-110" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/lindsey.howard"
                target="_blank"
                rel="noreferrer"
                className="block transform hover:scale-110 transition-transform"
              >
                <FaFacebook className="w-8 h-8 text-[#1877F2] hover:brightness-110" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block transform hover:scale-110 transition-transform"
              >
                <FaXTwitter className="w-8 h-8 text-white hover:text-blue-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-8 mt-16">
          <p className="text-[14px] text-slate-500 font-mono">
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-500 font-bold">LINDSEY.DEV</span>
            {" — Built with Next.js & Tailwind CSS"}
          </p>
          <p className="text-[11px] text-slate-600 mt-2 italic">
            Fort Walton Beach, Florida | Prop-Tech Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
