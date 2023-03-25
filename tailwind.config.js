module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#185adb",
        secondary: "#0a1931",
        yellow: "#ffc947 ",
      },
      lineHeight: {
        idleSize: "70px",
      },
    },
  },
  plugins: [],
};
