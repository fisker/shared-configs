import eslintConfigPrettier from 'eslint-config-prettier/flat'

const quotesConfig = [
  'error',
  'single',
  {
    avoidEscape: true,
    allowTemplateLiterals: 'never',
  },
]

export default [
  eslintConfigPrettier,

  {
    name: 'fisker/eslint-config-prettier',
    rules: {
      // https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#curly
      curly: ['error', 'all'],

      // https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#quotes-deprecated
      // quotes: quotesConfig,
      '@stylistic/quotes': quotesConfig,

      // https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#unicorntemplate-indent
      'unicorn/template-indent': 'error',
    },
  },
]
