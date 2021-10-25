module.exports = {
  rules: {},
  overrides: [
    {
      files: ['**/*.css'],
      extends: ['./css.js'].map((module) => require.resolve(module)),
    },
    {
      files: ['**/*.html'],
      extends: ['./html.js'].map((module) => require.resolve(module)),
    },
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
