module.exports = {
  plugins: ["react"],
  rules: {
    "react/destructuring-assignment": "off",
    // override this rule if using extension .jsx or .tsx
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    // Disable stylistic rules. Prettier takes care of formatting.
    "react/jsx-wrap-multilines": "off",
    "react/jsx-indent": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-curly-newline": "off"
  },
};