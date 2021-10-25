module.exports = {
  extends: ['./css.js', 'stylelint-config-html', './prettier.js'].map(
    (module) => require.resolve(module)
  ),
  rules: {},
}
