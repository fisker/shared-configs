import eslintPluginEslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs'

export default [
  eslintPluginEslintCommentsConfigs.recommended,
  {
    rules: {
      '@eslint-community/eslint-comments/no-unused-disable': 'warn',
    },
  },
]
