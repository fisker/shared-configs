module.exports = {
  extends: [
    './css.js',
    './scss.js',
    'stylelint-config-recommended-vue',
    './prettier.js',
  ].map((module) => require.resolve(module)),
}
