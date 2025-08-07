import eslintPluginJs from '@eslint/js'

export default [
  {
    name: 'eslintPluginJs.configs.recommended',
    ...eslintPluginJs.configs.recommended,
  },
  {
    name: 'fisker/@eslint/js/configs/recommended',
    rules: {
      'class-methods-use-this': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-promise-executor-return': 'error',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: /^_/.source,
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: /^_/.source,
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: /^_$/.source,
        },
      ],
    },
  },
]
