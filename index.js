module.exports = {
  extends: [
    'airbnb',
    require.resolve('./rules/react.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/promise.js'),
    require.resolve('./rules/react-hooks.js'),
    require.resolve('./rules/flowtype.js'),
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/eslint.js'),
  ],
}
