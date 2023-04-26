module.exports = {
  extends: [
    './css.js',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-scss',
  ].map((module) => require.resolve(module)),
  rules: {
    ...require('./css.js').rules,

    // Not safe for `rgba` function in `scss` files
    'color-function-notation': null,
    // Not safe for `rgba` function in `scss` files
    'alpha-value-notation': null,

    'at-rule-empty-line-before': null,

    // We may import files in the middle of files
    'no-invalid-position-at-import-rule': null,

    'scss/at-import-partial-extension': null,
    'scss/no-global-function-names': null,
    'scss/at-if-no-null': null,
    // Buggy
    'scss/operator-no-unspaced': null,

    // Prettier may break long expressions
    'scss/operator-no-newline-after': null,

    'scss/comment-no-empty': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-rule-conditional-no-parentheses': null,
  },
}
