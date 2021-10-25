module.exports = {
  extends: ['stylelint-config-standard', './prettier.js'].map((module) =>
    require.resolve(module)
  ),
  rules: {
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
    // SCSS function name, and express function name are case-sensitive
    'function-name-case': null,
    'property-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'declaration-empty-line-before': null,
    'function-url-quotes': 'never',
  },
}
