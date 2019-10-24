module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/eslint.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/promise.js'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/react-hooks.js'),
    require.resolve('./rules/flowtype.js'),
  ],
}
