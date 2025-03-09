// TODO: Prefer local installed plugin
import eslintPluginAva from 'eslint-plugin-ava'

export default [
  {
    name: 'eslint-plugin-ava/flat/recommended',
    ...eslintPluginAva.configs['flat/recommended'],
  },
  {
    name: 'fisker/eslint-plugin-ava',
    rules: {
      'ava/no-skip-test': 'warn',
    },
  },
]
