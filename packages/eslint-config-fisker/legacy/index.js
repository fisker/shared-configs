module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    '../rules/index.js',
    '../rules/conflicts-with-prettier.js',
    '../rules/semi.js',
  ].map(require.resolve),
}
