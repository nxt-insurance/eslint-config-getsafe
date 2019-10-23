module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "./rules/prettier.js",
    "./rules/eslint.js",
    "./rules/import.js",
    "./rules/promise.js",
    "./rules/react.js",
    "./rules/react-hooks.js"
  ],
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
