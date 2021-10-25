module.exports = {
  extends: ['stylelint-config-html', './css.js', './prettier.js'].map(
    (module) => require.resolve(module)
  ),
  rules: {},
}
