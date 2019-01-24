module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    '../rules/index.js',
    '../rules/conflicts-with-prettier.js',
    '../rules/no-semi.js',
  ].map(require.resolve),
}
