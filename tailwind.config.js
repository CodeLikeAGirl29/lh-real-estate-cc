// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/dist/esm/**/*.mjs",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Headings: Syne
        display: ["var(--font-syne)", "sans-serif"],
        // Base/Body: Clash Grotesk
        sans: ["var(--font-clash)", "sans-serif"],
      },
      colors: {
        'primary': {
          '50': '#ebf3fe',
          '100': '#ddeafc',
          '200': '#c2dafb',
          '300': '#98c4f8',
          '400': '#67a3f3',
          '500': '#4481ed',
          '600': '#2e63e2',
          '700': '#2650cf',
          '800': '#2542a8',
          '900': '#233b85',
          '950': '#1a2651',
        },
        emerald: {
          500: '#6366f1',
          600: '#4f46e5',
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/plugin.cjs"),
  ],
  darkMode: "class"
};