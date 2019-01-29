// don't use @vue/eslint-config-prettier
// eslint:recommended breaks airbnb
// https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js

module.exports = {
  extends: [
    // airbnb
    'eslint-config-airbnb-base',
    './rules/airbnb-override/best-practices.js',
    './rules/airbnb-override/errors.js',
    './rules/airbnb-override/node.js',
    './rules/airbnb-override/style.js',
    './rules/airbnb-override/variables.js',
    './rules/airbnb-override/es6.js',
    './rules/airbnb-override/imports.js',

    // prettier
    './rules/prettier/vue.js',

    // vue
    './rules/vue/vue.js',
  ].map(require.resolve),
}
