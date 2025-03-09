// https://github.com/vuejs/eslint-plugin-vue
// https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js

// TODO: Prefer local installed plugin
import eslintPluginVue from 'eslint-plugin-vue'

export default [
  eslintPluginVue.configs['flat/recommended'],
  {
    name: 'fisker/eslint-plugin-vue',
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

      // https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
      'vue/html-self-closing': [
        'error',
        {
          html: {
            normal: 'never',
            void: 'any',
            component: 'any',
          },
          svg: 'any',
          math: 'any',
        },
      ],
    },
  },
]
