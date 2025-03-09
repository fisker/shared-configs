import eslintPluginSonarjs from 'eslint-plugin-sonarjs'

const recommended = eslintPluginSonarjs.configs.recommended

const rules = Object.fromEntries(
  Object.entries(recommended.rules).filter(([, value]) => value !== 'off'),
)

export default [
  {
    ...recommended,
    name: 'fisker/eslint-plugin-sonarjs',
    rules: {
      ...rules,
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/prefer-single-boolean-return': 'off',
      'sonarjs/todo-tag': 'off',
    },
  },
]
