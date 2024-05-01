/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heropattern: "url('../imagens/Menu.png')",
      }),

      backgroundImage: (theme) => ({
        imgLupa: "url('../imagens/ImageLupa.svg')",
      }),

      backgroundPosition: (theme) => ({
        "bg-position-personalizada": "1.5em ",
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
  plugins: [],
};
