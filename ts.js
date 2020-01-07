module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    require.resolve('./rules/eslint.js'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/promise.js'),
    require.resolve('./rules/react-hooks.js'),
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/typescript.js'),
  ],
  rules: {},
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root/>@types` directory even if it doesn't contain any source code, like `@types/unist`
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
}
