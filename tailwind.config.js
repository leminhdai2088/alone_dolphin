/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./layout/**/*.html"],
  theme: {
    extend: {
      screens: {
        md: "740px",
        // => @media (min-width: 740px) { ... }
      },
    },
    screens: {
      tab: "740px",
      // => @media (min-width: 740px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
