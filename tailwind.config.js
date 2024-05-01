/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../imagens/Menu.png')",
      }),
      colors: {
        colorFund: "#EBECEE",
        primary: "#ff6600",
        secondary: "#3366cc",
        wite: "#fffff",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
        fontPrimary: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: [],
};
