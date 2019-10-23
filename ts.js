module.exports = {
  plugins: [
    "@typescript-eslint"
  ],
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
