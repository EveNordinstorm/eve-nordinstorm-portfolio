/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts, scss}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Century Gothic"', "sans-serif"],
      rock: ['"Rock Salt"', "serif"],
    },
    colors: {
      purple: "#9260DE",
      darkPurple: "#6B47A2",
      lightBlue: "#0ea5e9",
      fuchsia: "#86198f",
      black: "#000000",
      white: "#ffffff",
      lightGray: "#e0e7ff",
    },
  },
  plugins: [],
};
