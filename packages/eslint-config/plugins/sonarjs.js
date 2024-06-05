import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintPluginSonarjs} = await importPreferLocal(
  'eslint-plugin-sonarjs',
)

export default [
  eslintPluginSonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/prefer-single-boolean-return': 'off',
    },
  },
]
