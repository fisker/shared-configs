const base = require('@fisker/eslint-config')

module.exports = {
  root: true,
  parser: base.parser,
  env: {
    es6: false,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
    },
  },
  extends: [
    // plugins
    '@fisker/eslint-config/plugins/promise.js',
    '@fisker/eslint-config/plugins/unicorn.js',
    '@fisker/eslint-config/plugins/eslint-comments.js',

    // plugins
    './plugins/es.js',
    './plugins/unicorn.js',

    // basic
    'eslint-config-airbnb-base/legacy',
    '@fisker/eslint-config/rules/best-practices.js',
    '@fisker/eslint-config/rules/errors.js',
    '@fisker/eslint-config/rules/style.js',
    '@fisker/eslint-config/rules/variables.js',

    // prettier
    '@fisker/eslint-config/plugins/prettier.js',
  ].map((module) => require.resolve(module)),
  rules: {
    ...base.rules,

    // must strict
    strict: ['error', 'function'],

    // catch shadow
    'no-catch-shadow': 'error',

    // not supported
    'prefer-exponentiation-operator': 'off',
  },
}
