/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["*.cjs"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
