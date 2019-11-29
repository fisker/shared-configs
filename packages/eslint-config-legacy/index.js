// TODO: need refactor

module.exports = {
  root: true,
  parser: 'babel-eslint',
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
    '@fisker/eslint-config/plugins/optimize-regex.js',

    // plugins
    './plugins/es.js',
    './plugins/unicorn.js',

    // basic
    'eslint-config-airbnb-base/legacy',
    '@fisker/eslint-config/rules/best-practices.js',
    '@fisker/eslint-config/rules/errors.js',
    '@fisker/eslint-config/rules/style.js',
    '@fisker/eslint-config/rules/variables.js',

    // prittier
    '@fisker/eslint-config/plugins/prettier.js',
  ].map(require.resolve),
  rules: {
    ...require('@fisker/eslint-config').rules,

    // must strict
    strict: ['error', 'function'],

    // catch shadow
    'no-catch-shadow': 'error',
  },
}
