import eslintPluginJs from '@eslint/js'

export default [
  {
    name: 'eslintPluginJs.configs.recommended',
    ...eslintPluginJs.configs.recommended,
  },
  {
    name: 'fisker/@eslint/js/configs/recommended',
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]
