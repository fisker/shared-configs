module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    'eslint-config-prettier',
    '../rules/index.js',
  ].map(require.resolve),
}
