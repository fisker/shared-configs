// don't use @vue/eslint-config-prettier
// eslint:recommended breaks airbnb
// https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/prettier.js',
    './rules/vue.js',
    './rules/prettier-vue.js',
    './rules/imports.js',
    './rules/index.js',
  ].map(require.resolve),
}
