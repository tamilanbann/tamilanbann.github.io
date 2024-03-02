/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    // ...
    zIndex: ["responsive", "hover", "focus"],
  },
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // zIndex: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
