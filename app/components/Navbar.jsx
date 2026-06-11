"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll for that premium glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Innovations", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "The Ledger", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-gray-950 border-b ${
        scrolled ? "border-white/10 py-2" : "border-white/5 py-4"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Brand/Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-bold tracking-tighter text-white"
          >
            LINDSEY H <span className="text-sky-500"> REAL ESTATE</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <FaBars className="size-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-white/20 ml-2" /> {/* Divider */}
          <a
            href="https://github.com/codelikeagirl29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/lindsey-howard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="mailto:lindseykdev@gmail.com"
            className="rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-sky-500 transition-all"
          >
            CONTACT ME &rarr;
          </a>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 p-6 sm:max-w-sm border-l border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white tracking-tighter">
                LINDSEY.DEV
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-400 hover:text-white"
              >
                <FaXmark className="size-7" />
              </button>
            </div>
            <div className="mt-12 flow-root">
              <div className="space-y-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-4 text-xl font-bold text-white hover:bg-white/5 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="mailto:lindseykdev@gmail.com"
                  className="mt-10 block text-center rounded-xl bg-sky-600 py-4 text-lg font-bold text-white"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
