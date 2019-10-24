module.exports = {
  plugins: ['prettier'],
  extends: ['prettier', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'es5',
        printWidth: 100,
        singleQuote: true,
      },
    ],
  },
}
