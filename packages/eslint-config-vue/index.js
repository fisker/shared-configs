module.exports = {
  root: true,
  extends: [
    '@fisker/eslint-config',
    './plugins/vue.js',
    './plugins/prettier.js',
  ].map(require.resolve),
  rules: {},
}
