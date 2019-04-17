// https://github.com/vuejs/eslint-plugin-vue
// https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/strongly-recommended.js

module.exports = {
  plugins: ['vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    // allow unused vars
    'vue/no-unused-vars': 'warn',

    // allow unused components
    'vue/no-unused-components': [
      'warn',
      {
        ignoreWhenBindingPresent: true,
      },
    ],

    // https://vuejs.github.io/eslint-plugin-vue/rules/this-in-template.html
    'vue/this-in-template': ['error', 'never'],
  },
}
