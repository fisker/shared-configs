module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'].map((module) =>
    require.resolve(module)
  ),
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ].map((module) => require.resolve(module)),
  rules: {
    // Not safe for `rgba` function in `scss` files
    'color-function-notation': null,
    // Not safe for `rgba` function in `scss` files
    'alpha-value-notation': null,

    'block-no-empty': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
    'prettier/prettier': true,
    // SCSS function name, and express function name are case-sensitive
    'function-name-case': null,
    'property-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'declaration-empty-line-before': null,
    'no-invalid-position-at-import-rule': null,
    'function-url-quotes': 'never',

    'scss/at-import-partial-extension': 'always',
  },
}
