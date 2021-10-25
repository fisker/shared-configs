module.exports = {
  extends: [
    './css.js',
    'stylelint-config-recommended-scss',
    './prettier.js',
  ].map((module) => require.resolve(module)),
  rules: {
    // Not safe for `rgba` function in `scss` files
    'color-function-notation': null,
    // Not safe for `rgba` function in `scss` files
    'alpha-value-notation': null,

    'scss/at-import-partial-extension': null,
  },
}
