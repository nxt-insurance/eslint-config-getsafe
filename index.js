module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['flowtype', 'import', 'prettier', 'promise', 'react'],
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

    'import/namespace': ['error', { allowComputed: true }],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],

    'jsx-a11y/anchor-is-valid': 'off',

    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-nesting': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',

    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'flowtype/array-style-complex-type': ['error', 'shorthand'],
    'flowtype/array-style-simple-type': ['error', 'shorthand'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/newline-after-flow-annotation': ['error', 'never'],
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': ['error'],
    'flowtype/no-unused-expressions': ['error'],
    'flowtype/no-weak-types': ['error', { any: false }],
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-exact-type': ['error', 'always'],
    'flowtype/require-return-type': [
      'error',
      'always',
      {
        annotateUndefined: 'never',
        excludeArrowFunctions: 'expressionsOnly',
      },
    ],
    'flowtype/require-valid-file-annotation': [
      'error',
      'always',
      {
        annotationStyle: 'line',
      },
    ],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': ['error', '^([A-Z]+[a-z0-9A-Z]*)$'],
    'flowtype/type-import-style': ['error', 'declaration'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
  },
}
