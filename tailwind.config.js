/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Century Gothic"', "sans-serif"],
      rock: ['"Rock Salt"', "cursive"],
    },
    colors: {
      purple: "#9260DE",
      darkPurple: "#6B47A2",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
