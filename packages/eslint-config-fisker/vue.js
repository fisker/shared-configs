/**
 * dev notice:
 * don't use @vue/eslint-config-prettier
 * eslint:recommended extend in this config breaks airbnb
 * check this https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js
 */

module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // promise
    './configs/promise/promise.js',

    // unicorn
    './configs/unicorn/unicorn.js',

    // eslint-comments
    // './configs/eslint-comments/eslint-comments.js',

    // vue
    './configs/vue/vue.js',

    // prettier
    './configs/prettier/prettier-vue.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
