module.exports = {
  rules: {
    camelcase: 'off',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    radix: ['error', 'as-needed'],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'off',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-console': ['error', { allow: ['error', 'groupCollapsed', 'groupEnd'] }],
    'no-else-return': 'off',
    'no-implicit-coercion': ['error', {}],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false },
      },
    ],
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  },
}
