module.exports = {
  plugins: ['eslint-plugin-promise'].map(require.reslove),
  extends: ['plugin:promise/recommended'],
  rules: {},
}
