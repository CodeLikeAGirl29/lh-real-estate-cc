/** @type {import('tailwindcss').Config} */
const twElementsPlugin = require("tw-elements/plugin.cjs");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        brass: "var(--brass)",
        steel: "var(--steel)",
        signal: "var(--signal)",
        gulf: "var(--gulf)",
      },
    },
  },
  plugins: [twElementsPlugin],
  darkMode: "class",
};
