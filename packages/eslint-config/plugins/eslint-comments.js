import eslintPluginEslintComments from 'eslint-plugin-eslint-comments'

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
