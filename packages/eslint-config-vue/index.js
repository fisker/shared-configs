import fiskerEslintConfig from '@fisker/eslint-config'
// TODO: Prefer local installed plugin
import vueEslintParser from 'vue-eslint-parser'
import pluginVue from './plugins/vue.js'

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
  },
]
