/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Guestlayout/HeroSection.jsx"],
  // Scope Tailwind to the hero only, so it can't touch your Bootstrap pages
  important: ".swiss-hero",
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
