module.exports = {
  extends: [
    './css.js',
    'stylelint-config-recommended-vue/scss',
    './scss.js',
    './prettier.js',
  ].map((module) => require.resolve(module)),
  // The customSyntax from `stylelint-config-recommended-vue` is override by `./scss.js`
  customSyntax: require.resolve('postcss-html'),
  rules: {},
}
