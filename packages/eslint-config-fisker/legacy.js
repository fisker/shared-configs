module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/prettier.js',
    './rules/index.js',
  ].map(require.resolve),
}
