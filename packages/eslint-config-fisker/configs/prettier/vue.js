module.exports = {
  extends: ['eslint-config-prettier/vue'].map(require.resolve),
  rules: {
    'prettier/prettier': 'warn',
  },
}
