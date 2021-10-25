module.exports = {
  rules: {},
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['./css.js', './scss.js', './vue.js', './prettier.js'].map(
        (module) => require.resolve(module)
      ),
    },
  ],
}
