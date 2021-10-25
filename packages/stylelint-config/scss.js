module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    './css.js',
    './prettier.js',
  ].map((module) => require.resolve(module)),
  rules: {
    ...require('stylelint-config-recommended-scss').rules,

    // Not safe for `rgba` function in `scss` files
    'color-function-notation': null,
    // Not safe for `rgba` function in `scss` files
    'alpha-value-notation': null,

    // We may import files in the middle of files
    'no-invalid-position-at-import-rule': null,

    'scss/at-import-partial-extension': null,
    'scss/no-global-function-names': null,
    // Buggy
    'scss/operator-no-unspaced': null,

    // Prettier may break long expressions
    'scss/operator-no-newline-after': null,

    'scss/comment-no-empty': null,
  },
}
