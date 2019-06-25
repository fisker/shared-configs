module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'].map(require.resolve),
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ].map(require.resolve),
  rules: {
    'prettier/prettier': true,
    'selector-pseudo-element-no-unknown': [true, ['v-deep']],
  },
}
