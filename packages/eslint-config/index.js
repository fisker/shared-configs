module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
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
  ].map(require.resolve),
  rules: {
    // should not set by `eslint-plugin-node`,
    // and also there is a option by `eslint-config-unicorn`
    'no-process-exit': 'off',

    // conflicts with `unicorn/prevent-abbreviations` auto fixing
    'no-underscore-dangle': 'off',
  },
}
