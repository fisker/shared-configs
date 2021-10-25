module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    './prettier.js',
  ].map((module) => require.resolve(module)),
  rules: {
    'block-no-empty': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'deep', 'global'],
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

    'rule-empty-line-before': null,

    // Annoying during refactoring
    'declaration-block-no-redundant-longhand-properties': null,
  },
}
