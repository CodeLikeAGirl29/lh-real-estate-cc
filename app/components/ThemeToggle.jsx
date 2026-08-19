"use client";
import { useLayoutEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  // Re-applies the attribute the pre-hydration <script> set (same rule),
  // in case a dev-mode Strict Mode remount cleared it — see
  // next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md.
  // No-op in production, where the script's DOM write already stuck.
  useLayoutEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem("theme");
    } catch {}
    const isLight =
      stored === "light" ||
      (!stored &&
        window.matchMedia("(prefers-color-scheme: light)").matches &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isLight) {
      document.documentElement.dataset.theme = "light";
    }
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    window.localStorage.setItem("theme", next);
  };

  // Avoid rendering an icon that doesn't match the real theme before
  // the client has read localStorage/the DOM attribute set by the
  // pre-hydration script.
  if (!theme) {
    return <span className={`inline-block size-[18px] ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`text-muted hover:text-foreground transition-colors duration-200 ${className}`}
    >
      {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}
