module.exports = {
  extends: [
    'stylelint-config-recommended-vue',
    './css.js',
    './scss.js',
    './prettier.js',
  ].map((module) => require.resolve(module)),
  rules: {},
}
