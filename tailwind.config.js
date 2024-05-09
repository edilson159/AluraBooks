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
        "bg-position-personalizada": "3em ",
        "position-initial": "position:initial ",
      }),

      colors: {
        colorFund: "#EBECEE",
        primary: "#EB9B00",
        secondary: "#3366cc",
        wite: "#ffffff",
        azull: "#002F52",
      },

      fontFamily: {
        custom: ["Roboto", "sans-serif"],
        fontPrimary: ["Poppins"],
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
