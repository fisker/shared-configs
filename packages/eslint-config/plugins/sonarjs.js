module.exports = {
  plugins: ['sonarjs'],
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-nested-template-literals': 'off',
  },
}
