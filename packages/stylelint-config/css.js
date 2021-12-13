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
    'rule-empty-line-before': null,
    'comment-no-empty': null,

    'function-url-quotes': ['never', {severity: 'warning'}],
    'color-hex-length': ['short', {severity: 'warning'}],
    'alpha-value-notation': ['percentage', {severity: 'warning'}],
    'color-function-notation': [
      'modern',
      {disableFix: true, severity: 'warning'},
    ],
    // New properties, values, at-rules, and selectors have to be prefixed
    'value-no-vendor-prefix': [true, {disableFix: true, severity: 'warning'}],
    'property-no-vendor-prefix': [
      true,
      {disableFix: true, severity: 'warning'},
    ],
    'selector-no-vendor-prefix': [
      true,
      {disableFix: true, severity: 'warning'},
    ],
    'at-rule-no-vendor-prefix': [true, {disableFix: true, severity: 'warning'}],

    // Annoying during refactoring
    'declaration-block-no-redundant-longhand-properties': null,
    // We (and other libs) use BEM
    'selector-class-pattern': null,
    // SCSS precision
    'number-max-precision': [8],

    'shorthand-property-no-redundant-values': [
      true,
      {disableFix: true, severity: 'warning'},
    ],

    'declaration-property-unit-disallowed-list': {
      'line-height': ['em', '%'],
    },
  },
}
