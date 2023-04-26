module.exports = {
  extends: ['./css.js', 'stylelint-config-html'].map((module) =>
    require.resolve(module),
  ),
  rules: {
    ...require('./css.js').rules,
  },
}
