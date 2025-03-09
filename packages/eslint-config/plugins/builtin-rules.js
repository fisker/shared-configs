import eslintPluginJs from '@eslint/js'

export default [
  {
    name: 'eslintPluginJs.configs.recommended',
    ...eslintPluginJs.configs.recommended,
  },
  {
    name: 'fisker/@eslint/js/configs/recommended',
    rules: {
      'no-unused-vars': [
        'warn',
        {vars: 'all', args: 'after-used', ignoreRestSiblings: true},
      ],
      'default-param-last': 'error',
      'class-methods-use-this': 'error',
    },
  },
]
