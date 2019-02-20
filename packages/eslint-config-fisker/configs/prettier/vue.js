module.exports = {
  plugins: ['eslint-plugin-prettier'].map(require.reslove),
  extends: ['eslint-config-prettier', 'eslint-config-prettier/vue'].map(
    require.resolve
  ),
  rules: {
    'prettier/prettier': 'warn',
  },
}
