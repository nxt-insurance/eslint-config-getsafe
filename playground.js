module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "./rules/eslint.js",
    "./rules/react-hooks.js",
    "./rules/react.js",
    "./rules/promise.js",
    "./rules/import.js",
    "./rules/prettier.js"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  rules: {
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  parser: "@typescript-eslint/parser"
};
