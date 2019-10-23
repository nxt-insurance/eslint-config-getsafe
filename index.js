module.exports = {
  plugins: [
  ],
  extends: [
    'plugin:flowtype/recommended', 
    'plugin:react/recommended', 
    'airbnb', 
    'prettier',
    './rules/prettier.js',
    './rules/eslint.js',
    './rules/import.js',
    './rules/promise.js',
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/flow.js'
  ],
  rules: {
  },
}
