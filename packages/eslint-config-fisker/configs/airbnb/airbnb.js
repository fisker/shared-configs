module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/imports.js',
    'eslint-config-airbnb-base/whitespace',
  ].map(require.resolve),
}
