/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cus: "Poppins",
      },
      width: {
        button: "135px",
      },
      height: {
        button: "50px",
      },
      colors: {
        bgHero: "#F1F0FE;",
        purp: "#8170F2",
        primary: "#1D1D1D",
        navCol: "#757575",
        footCol: "#6F6C90",
        yell: "#FDAF17",
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
};
