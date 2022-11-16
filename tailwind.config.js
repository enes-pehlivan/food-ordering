/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        primary: "#EBE1CE",
        secondary: "#ED3C20",
        third: "#d9bd7d",
        four: "#5cf2bc",
        danger: "#ff0000",
      },
      fontFamily: {
        boldfont: ["Concert One", "cursive"],
        navfont: ["Alfa Slab One", "cursive"],
        japanfont: ["Zen Antique", "serif"],
        gochifont: ["Gochi Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
