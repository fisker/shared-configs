// don't use @vue/eslint-config-prettier
// eslint:recommended breaks airbnb
// https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js

module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // prettier
    './configs/prettier/vue.js',

    // vue
    './configs/vue/vue.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
