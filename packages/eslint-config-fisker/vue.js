module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '../rules/vue.js',
    '../rules/imports.js',
    '../rules/index.js',
  ].map(require.resolve),
}
