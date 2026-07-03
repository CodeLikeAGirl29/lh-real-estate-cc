import flowbitePlugin from "flowbite/plugin";
import twElementsPlugin from "tw-elements/plugin.cjs";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/dist/esm/**/*.mjs",
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
        // Re-anchored from generic sky-blue to the blueprint/ink family
        // so existing bg-primary-500 etc. usages (Hero glow, Navbar) pick
        // this up automatically.
        primary: {
          50: "#EDF2F6",
          100: "#D7E3EC",
          200: "#B0C7D9",
          300: "#85A9C3",
          400: "#5D8AAA",
          500: "#3A6B8C",
          600: "#295073",
          700: "#1F3D59",
          800: "#182F44",
          900: "#14283D",
          950: "#0C1826",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        signal: "var(--signal)", // one hot accent, CTAs only
        gulf: "var(--gulf)", // links, hover, mono labels
      },
    },
  },
  plugins: [flowbitePlugin, twElementsPlugin],
  darkMode: "class",
};

export default config;
