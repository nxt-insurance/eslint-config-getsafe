module.exports = {
  plugins: [],
  extends: [
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "./rules/prettier.js",
    "./rules/import.js",
    "./rules/promise.js",
    "./rules/eslint.js",
  ],
};
