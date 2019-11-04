module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    require.resolve('./rules/eslint.js'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/promise.js'),
    require.resolve('./rules/react-hooks.js'),
    require.resolve('./rules/prettier.js'),
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // Todo: investigate why eslint fails for typescript when
    // turn on below prop
    'import/no-unused-modules': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
}
