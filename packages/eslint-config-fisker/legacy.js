module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/prettier.js',
    './rules/index.js',
    './rules/legacy.js',
  ].map(require.resolve),
}
