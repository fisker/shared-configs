import eslintConfigXo from 'eslint-config-xo'

const xoRules = Object.fromEntries(
  Object.entries(eslintConfigXo[0].rules).filter(
    ([ruleName]) => !ruleName.startsWith('@stylistic/'),
  ),
)

export default [
  {
    name: 'fisker/eslint-config-xo',
    rules: {
      ...xoRules,
      'no-return-await': 'off',
      'no-buffer-constructor': 'off',
      'capitalized-comments': 'off',
    },
  },
]
