module.exports = {
  root: true,
  parser: require.resolve('babel-eslint'),
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    '@vue/eslint-config-airbnb',
    '../settings/import.js',
    '../rules/index.js',
    '../rules/conflicts-with-prettier.js',
    '../rules/semi.js'
  ].map(require.resolve),
}