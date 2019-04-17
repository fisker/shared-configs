/**
 * dev notice:
 * don't use @vue/eslint-config-prettier
 * eslint:recommended extend in this config breaks airbnb
 * check this https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js
 */

module.exports = {
  extends: [
    // vue
    './configs/vue/vue.js',

    // basic
    './index.js',

    // prettier
    './configs/prettier/prettier-vue.js',
  ].map(require.resolve),
}
