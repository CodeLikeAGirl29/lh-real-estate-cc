// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/dist/esm/**/*.mjs", // Correct Flowbite path
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin"), // Use base flowbite plugin
    require("tw-elements/plugin.cjs"),
  ],
  darkMode: "class"
};