module.exports = {
  plugins: ['prettier'],
  extends: ['eslint-config-prettier', 'eslint-config-prettier/vue'].map(
    require.resolve
  ),
  rules: {
    'prettier/prettier': 'warn',
  },
}
