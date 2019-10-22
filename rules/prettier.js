module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "es5",
        printWidth: 100,
        singleQuote: true
      }
    ]
  }
}