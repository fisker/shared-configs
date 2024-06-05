// TODO: Prefer local installed plugin
import eslintPluginAva from 'eslint-plugin-ava'

export default [
  eslintPluginAva.configs['flat/recommended'],
  {
    rules: {
      'ava/no-skip-test': 'warn',
    },
  },
]
