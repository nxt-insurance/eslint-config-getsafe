module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/eslint.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/promise.js'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/react-hooks.js'),
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // Todo: investigate why eslint fails for typescript when
    // turn on below prop
    'import/no-unused-modules': ['off'],
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
