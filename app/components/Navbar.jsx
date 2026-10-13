"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaXmark } from "react-icons/fa6";
import { m, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const CONTACT_EMAIL = "lindsey.howard.re@outlook.com";
const PHONE_DISPLAY = "(850) 533-5877";
const PHONE_HREF = "tel:+18505335877";

const navLinks = [
  { name: "Home value", href: "/#cma", desktop: true },
  { name: "Payment calculator", href: "/#calculator", desktop: true },
  { name: "Neighborhoods", href: "/#market-map", desktop: true },
  { name: "Blog", href: "/blog", desktop: true },
  { name: "About", href: "/about", desktop: true },
  { name: "Projects", href: "/#projects" },
  { name: "For mentors", href: "/about#mentor" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/codelikeagirl29", Icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/lindsey-howard", Icon: FaLinkedin },
  {
    name: "Facebook",
    href: "https://www.facebook.com/lindseyhowardrealestate",
    Icon: FaFacebook,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close the drawer on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-foreground/10"
            : "bg-background/80 border-transparent"
        }`}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-x-6 px-4 sm:px-6 lg:h-[72px] lg:px-8"
        >
          {/* Name, set like a sign on the door */}
          <Link href="/" className="group flex shrink-0 items-baseline gap-2.5 whitespace-nowrap">
            <span className="font-display text-[1.375rem] font-semibold leading-none text-foreground">
              Lindsey Howard
            </span>
            <span className="hidden text-sm text-muted sm:inline">eXp Realty</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-x-6 xl:flex">
            {navLinks.filter((link) => link.desktop).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-[0.9375rem] text-foreground/75 underline-offset-[6px] decoration-reef decoration-2 transition-colors hover:text-foreground hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-x-5 xl:flex">
            <ThemeToggle />
            <a
              href={PHONE_HREF}
              className="hidden text-[0.9375rem] font-medium tabular text-foreground hover:text-reef 2xl:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-reef px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Email me
            </a>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-x-1 xl:hidden">
            <ThemeToggle className="p-2.5" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Open main menu"
              className="-mr-2 inline-flex items-center justify-center p-2.5 text-foreground hover:text-reef"
            >
              <FaBars className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="relative z-50 xl:hidden">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-foreground/30"
              onClick={() => setMobileMenuOpen(false)}
            />

            <m.div
              id="mobile-menu-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 0.8, 0.2, 1] }}
              className="fixed inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-background px-6 pb-8 pt-4 sm:max-w-sm sm:border-l sm:border-foreground/10"
            >
              <div className="flex h-12 items-center justify-between">
                <span className="font-display text-[1.375rem] font-semibold text-foreground">
                  Lindsey Howard
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="-mr-2 p-2 text-muted hover:text-foreground"
                >
                  <FaXmark className="size-6" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-8 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-foreground/10 py-4 font-display text-2xl text-foreground hover:text-reef"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="rounded-full bg-reef px-5 py-3.5 text-center font-semibold text-background"
                >
                  Call or text {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-full border border-foreground/20 px-5 py-3.5 text-center font-semibold text-foreground"
                >
                  Email me
                </a>
              </div>

              <div className="mt-auto flex items-center gap-5 pt-10">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="p-1 text-muted hover:text-foreground"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
