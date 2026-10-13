"use client";
import { useLayoutEffect, useSyncExternalStore } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const listeners = new Set();

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  let stored = null;
  try {
    stored = window.localStorage.getItem("theme");
  } catch {}
  // Sunny (light) is the default; night mode only when chosen or when
  // the visitor's system asks for it.
  const isDark =
    stored === "dark" ||
    (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return isDark ? "dark" : "light";
}

// Unknown on the server — matches whatever the pre-hydration <script> in
// layout.js already wrote to the DOM before hydration runs.
function getServerSnapshot() {
  return null;
}

function setTheme(next) {
  if (next === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
  try {
    window.localStorage.setItem("theme", next);
  } catch {}
  listeners.forEach((callback) => callback());
}

export default function ThemeToggle({ className = "" }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keeps the DOM attribute in sync with derived state (no setState here,
  // just a DOM write) — covers React Strict Mode's dev-only remount, which
  // clears attributes the pre-hydration <script> set outside React's view.
  // See next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md.
  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else if (theme === "light") {
      delete document.documentElement.dataset.theme;
    }
  }, [theme]);

  // Avoid rendering an icon that doesn't match the real theme before
  // the client has read localStorage/the DOM attribute set by the
  // pre-hydration script.
  if (!theme) {
    return <span className={`inline-block size-[18px] ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`text-muted hover:text-foreground transition-colors duration-200 ${className}`}
    >
      {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}
