const { withAnimations } = require("animated-tailwindcss");
/** @type {import('tailwindcss').Config} */

module.exports = withAnimations({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
