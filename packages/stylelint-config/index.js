module.exports = {
  extends: ['./css.js'].map((module) => require.resolve(module)),
  rules: {},
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['./scss.js'].map((module) => require.resolve(module)),
    },
    {
      files: ['**/*.vue'],
      extends: ['./vue.js'].map((module) => require.resolve(module)),
    },
  ],
}
