module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  extends: [
    // plugins
    './plugins/import.js',
    './plugins/promise.js',
    './plugins/node.js',
    './plugins/unicorn.js',
    './plugins/eslint-comments.js',

    // airbnb
    'eslint-config-airbnb-base',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/imports.js',
    './rules/node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js',

    // prettier
    './plugins/prettier.js',
  ].map((id) => require.resolve(id)),
  rules: {
    // should not set by `eslint-plugin-node`,
    // and also there is a option by `eslint-config-unicorn`
    'no-process-exit': 'off',

    // conflicts with `unicorn/prevent-abbreviations` auto fixing
    'no-underscore-dangle': 'off',

    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
  },
}
