module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "import",
    "prettier",
    "promise",
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "es5",
        printWidth: 100,
        singleQuote: true
      }
    ],
    camelcase: "off",
    curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    radix: ["error", "as-needed"],
    "arrow-body-style": "off",
    "consistent-return": "off",
    "global-require": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-console": ["error", { allow: ["error", "groupCollapsed", "groupEnd"] }],
    "no-else-return": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off", // this rule is replaced by 'flowtype/no-unused-expressions'
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: { array: false, object: false }
      }
    ],
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

    "import/default": "error",
    "import/dynamic-import-chunkname": ["error"],
    "import/export": "error",
    "import/first": "error",
    "import/named": "error",
    "import/namespace": ["error", { allowComputed: true }],
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/no-unused-modules": ["error", { unusedExports: true }],
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": "off",

    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-nesting": "error",
    "promise/no-return-in-finally": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",

    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    // Disable stylistic rules. Prettier takes care of formatting.
    "react/jsx-wrap-multilines": "off",
    "react/jsx-indent": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-curly-newline": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  parser: "@typescript-eslint/parser"
};
