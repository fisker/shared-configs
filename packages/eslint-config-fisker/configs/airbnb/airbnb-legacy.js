module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    'eslint-config-airbnb-base/whitespace',
  ].map(require.resolve),
}
