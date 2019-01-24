module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/prettier.js',
    './rules/imports.js',
    './rules/index.js',
  ].map(require.resolve),
}
