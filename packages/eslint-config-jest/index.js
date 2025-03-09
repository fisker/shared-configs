// TODO: Prefer local installed plugin
import eslintPluginJest from 'eslint-plugin-jest'

export default [
  {
    name: 'eslint-plugin-jest/flat/recommended',
    ...eslintPluginJest.configs['flat/recommended'],
  },
  {
    name: 'fisker/eslint-plugin-jest',
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/valid-title': 'off',
      'unicorn/prefer-module': 'off',
    },

    languageOptions: {
      globals: {
        require: 'readonly',
        __filename: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
]
