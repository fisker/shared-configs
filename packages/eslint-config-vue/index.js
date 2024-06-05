import fiskerEslintConfig from '@fisker/eslint-config'
import pluginVue from './plugins/vue.js'

// TODO: Prefer local installed plugin
import vueEslintParser from 'vue-eslint-parser'

const {languageOptions} = fiskerEslintConfig.find(
  (config) => config.languageOptions,
)

export default [
  ...pluginVue,
  ...fiskerEslintConfig,
  {
    // eslint-plugin-vue override parserOptions
    // https://github.com/vuejs/eslint-plugin-vue/blob/c3111fed451807eb92dc3f5020d144fbd2af9fda/lib/configs/base.js#L8
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        ...languageOptions.parserOptions,
        parser: languageOptions.parser,
      },
    },
    rules: {
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
