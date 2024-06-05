import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintPluginEslintComments} = await importPreferLocal(
  'eslint-plugin-eslint-comments',
)

export default [
  {
    plugins: {
      'eslint-comments': eslintPluginEslintComments,
    },

    rules: {
      ...eslintPluginEslintComments.configs.recommended.rules,
      'eslint-comments/no-unused-disable': 'warn',
    },
  },
]
