module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'].map(require.resolve),
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ].map(require.resolve),
  rules: {
    /* eslint-disable unicorn/no-null */
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
    /* eslint-enable unicorn/no-null */
  },
}
