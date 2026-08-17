"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaXmark } from "react-icons/fa6";
import { m, AnimatePresence } from "framer-motion";

const CONTACT_EMAIL = "lindsey.howard.re@outlook.com";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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

  const navLinks = [
    { name: "Innovations", href: "/#projects" },
    { name: "Calculator", href: "/#calculator" },
    { name: "Home Value", href: "/#cma" },
    { name: "Market Map", href: "/#market-map" },
    { name: "Experience", href: "/#experience" },
    { name: "The Ledger", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "For Mentors", href: "/about#mentor" },
  ];

  return (
    <>
      <m.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 bg-background/80 backdrop-blur-md border-b ${
          scrolled
            ? "border-muted/20 py-2 bg-background/95"
            : "border-muted/10 py-4"
        }`}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-full items-center justify-between p-6 pl-4 lg:px-8"
        >
          {/* Brand/Logo */}
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 font-display text-xl font-bold tracking-tighter text-foreground group"
            >
              L. HOWARD{" "}
              <span className="font-mono text-xs align-middle text-reef transition-colors duration-300 group-hover:text-steel ml-1">
                // RE + DEV
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Open main menu"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-foreground hover:text-reef"
            >
              <FaBars className="size-6" />
            </m.button>
          </div>

          {/* Desktop Navigation Links & Socials */}
          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-steel hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-4 w-px bg-muted/20 mx-2" />

            {/* Framer Motion Social Icons — brand-colored hovers */}
            <m.a
              href="https://github.com/codelikeagirl29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-muted transition-colors duration-200 hover:text-white"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaGithub size={18} />
            </m.a>
            <m.a
              href="https://linkedin.com/in/lindsey-howard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-muted transition-colors duration-200 hover:text-[#0A66C2]"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaLinkedin size={18} />
            </m.a>
            <m.a
              href="https://www.facebook.com/lindseyhowardrealestate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1.5 text-muted transition-colors duration-200 hover:text-[#1877F2]"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaFacebook size={18} />
            </m.a>
          </div>

          {/* Primary CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <m.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="frame group px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-reef bg-surface/30 border border-muted/10 hover:border-transparent hover:bg-surface hover:text-foreground transition-colors duration-300"
            >
              Contact Me{" "}
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-steel group-hover:text-reef">
                &rarr;
              </span>
            </m.a>
          </div>
        </nav>
      </m.header>

      {/* Framer Motion Mobile Drawer Slideout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden relative z-50">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <m.div
              id="mobile-menu-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-surface p-6 sm:max-w-sm border-l border-muted/10 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold text-foreground tracking-tighter">
                  L. HOWARD
                </span>
                <m.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-muted hover:text-reef"
                >
                  <FaXmark className="size-6" />
                </m.button>
              </div>

              <div className="mt-12 flow-root">
                <div className="space-y-2 py-6">
                  {/* Staggered Nav Links */}
                  <m.div
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    className="flex flex-col gap-2"
                  >
                    {navLinks.map((link) => (
                      <m.div
                        key={link.name}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: 20 },
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 font-display text-lg font-bold text-foreground hover:text-steel hover:bg-background/50 rounded-lg transition-colors"
                        >
                          {link.name}
                        </Link>
                      </m.div>
                    ))}
                  </m.div>

                  <m.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="frame group mt-8 block text-center py-4 font-mono text-sm font-bold uppercase tracking-widest text-reef bg-background border border-muted/10 transition-colors"
                  >
                    Get in Touch{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </m.a>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="mt-6 flex items-center justify-center gap-6"
                  >
                    <a
                      href="https://github.com/codelikeagirl29"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 text-muted hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/lindsey-howard"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-1.5 text-muted hover:text-[#0A66C2] transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/lindseyhowardrealestate"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-1.5 text-muted hover:text-[#1877F2] transition-colors"
                    >
                      <FaFacebook size={20} />
                    </a>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
