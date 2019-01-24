module.exports = {
  extends: [
    './rules/vue.js',
    'eslint-config-airbnb-base',
    '@vue/eslint-config-prettier',
    './rules/imports.js',
    './rules/index.js',
  ].map(require.resolve),
}
