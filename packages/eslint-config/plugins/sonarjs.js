import eslintPluginSonarjs from 'eslint-plugin-sonarjs'

export default [
  eslintPluginSonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/prefer-single-boolean-return': 'off',
      'sonarjs/todo-tag': 'off',
    },
  },
]
