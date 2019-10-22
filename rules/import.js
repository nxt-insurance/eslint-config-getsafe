module.exports = {
  plugins: [
    'import',
  ],
  rules: {
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
    "import/prefer-default-export": "off"
  },
};