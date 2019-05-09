module.exports = {
  plugins: ['flowtype', 'import', 'prettier', 'promise', 'react', 'react-hooks'],
  extends: ['plugin:flowtype/recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
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
    camelcase: 'off',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    radix: ['error', 'as-needed'],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-console': ['error', { allow: ['error', 'groupCollapsed', 'groupEnd'] }],
    'no-else-return': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off', // this rule is replaced by 'flowtype/no-unused-expressions'
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false },
      },
    ],
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    'import/default': 'error',
    'import/dynamic-import-chunkname': ['error'],
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': ['error', { allowComputed: true }],
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-unused-modules': ['error', { unusedExports: true }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',

    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-nesting': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',

    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // Disable stylistic rules. Prettier takes care of formatting.
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

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
  },
}
