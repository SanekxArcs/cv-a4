const { withAnimations } = require("animated-tailwindcss");
/** @type {import('tailwindcss').Config} */

module.exports = withAnimations({
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        print: {raw: 'print'},
        screen: {raw: 'screen'},
      },
    },
  },
  plugins: [],
});
