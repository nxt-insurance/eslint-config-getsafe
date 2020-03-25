module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': 'off',
    "react/function-component-definition": ['error', {
      "namedComponents": "arrow-function",
      "unnamedComponents":  "arrow-function"
    }],
    // Disable stylistic rules. Prettier takes care of formatting.
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
  },
}
