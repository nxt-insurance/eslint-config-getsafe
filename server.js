module.exports = {
  plugins: [],
  extends: [
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "./rules/prettier.js",
    "./rules/eslint.js",
    "./rules/import.js",
    "./rules/promise.js",
  ],
};
