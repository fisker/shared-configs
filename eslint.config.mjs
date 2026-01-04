import fiskerEslintConfig from '@fisker/eslint-config'

export default [
  ...fiskerEslintConfig,
  {
    rules: {
      'no-await-in-loop': 'off',
      'no-template-curly-in-string': 'off',
    },
  },
]
