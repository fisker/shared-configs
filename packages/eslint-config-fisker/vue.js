module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    '../rules/vue.js',
    '../rules/index.js',
    '../rules/imports.js',
  ].map(require.resolve),
}
