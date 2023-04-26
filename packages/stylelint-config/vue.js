module.exports = {
  extends: [
    './css.js',
    './scss.js',
    'stylelint-config-recommended-vue/scss',
  ].map((module) => require.resolve(module)),
  // The customSyntax from `stylelint-config-recommended-vue` is override by `./scss.js`
  customSyntax: require.resolve('postcss-html'),
  rules: {
    ...require('./css.js').rules,
    ...require('./scss.js').rules,
  },
}
