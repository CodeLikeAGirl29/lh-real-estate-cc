const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js", // Add this line
    flowbite.content(),
  ],
  plugins: [
    require("tw-elements/plugin.cjs"), // Add this line
    flowbite.plugin(),
  ],
  darkMode: "class"
};