/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      neutral: colors.neutral,
      cyan: colors.cyan,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },
  },
  plugins: [],
};
