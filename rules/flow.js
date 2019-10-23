module.exports = {
  plugins: ['flowtype'],
  rules: {
    'flowtype/array-style-complex-type': ['error', 'shorthand'],
    'flowtype/array-style-simple-type': ['error', 'shorthand'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/newline-after-flow-annotation': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': ['error'],
    'flowtype/no-unused-expressions': ['error'],
    'flowtype/no-weak-types': 'error',
    'flowtype/require-exact-type': ['error', 'always'],
    'flowtype/require-return-type': [
      'error',
      'always',
      {
        annotateUndefined: 'never',
        excludeArrowFunctions: 'expressionsOnly',
      },
    ],
    'flowtype/require-types-at-top': 'error',
    'flowtype/require-valid-file-annotation': [
      'error',
      'always',
      {
        annotationStyle: 'line',
      },
    ],
    'flowtype/type-id-match': ['error', '^([A-Z]+[a-z0-9A-Z]*)$'],
    'flowtype/type-import-style': ['error', 'declaration'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
    // Disable stylistic rules. Prettier takes care of formatting.
    'flowtype/delimiter-dangle': 'off',
    'flowtype/generic-spacing': 'off',
    'flowtype/object-type-delimiter': 'off',
    'flowtype/semi': 'off',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/space-before-generic-bracket': 'off',
    'flowtype/space-before-type-colon': 'off',
    'flowtype/union-intersection-spacing': 'off',
  }
}