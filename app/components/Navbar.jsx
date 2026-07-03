"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background border-b ${
        scrolled ? "border-foreground/10 py-2" : "border-foreground/5 py-4"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 font-display text-2xl font-bold tracking-tighter text-foreground"
          >
            L. HOWARD <span className="text-gulf font-mono text-sm align-middle">// RE + DEV</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-foreground"
          >
            <FaBars className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-gulf transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-foreground/20 ml-2" />
          <a href="https://github.com/codelikeagirl29" target="_blank" rel="noopener noreferrer"
            className="text-foreground/60 hover:text-gulf transition">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/lindsey-howard" target="_blank" rel="noopener noreferrer"
            className="text-foreground/60 hover:text-gulf transition">
            <FaLinkedin size={18} />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
            href="mailto:lindsey.howard.re@outlook.com"
            className="corner-marks px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-signal hover:text-foreground transition-all"
          >
            Contact Me &rarr;
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm border-l border-foreground/10">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold text-foreground tracking-tighter">
                L. HOWARD
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-foreground/60 hover:text-foreground"
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
                    className="block px-3 py-4 font-display text-xl font-bold text-foreground hover:text-gulf border-b border-foreground/5"
                  >
                    {link.name}
                  </Link>
                ))}
                
                  href="mailto:lindsey.howard.re@outlook.com"
                  className="corner-marks mt-10 block text-center py-4 text-lg font-bold text-signal"
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