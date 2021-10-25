module.exports = {
  rules: {},
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['./css.js', './scss.js', './vue.js', './prettier.js'].map(
        (module) => require.resolve(module)
      ),
    },
  ],
}
