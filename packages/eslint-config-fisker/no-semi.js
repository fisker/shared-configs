module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/index.js',
    './rules/imports.js',
    './rules/conflicts-with-prettier.js',
    './rules/no-semi.js',
  ].map(require.resolve),
}
