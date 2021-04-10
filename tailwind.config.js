module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2A3E49",
      },
    },
    fontFamily: {
      sans: ["Teko", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
