module.exports = {
  extends: ['./css.js'].map((module) => require.resolve(module)),
  rules: {},
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      extends: ['./html.js'].map((module) => require.resolve(module)),
    },
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['./scss.js'].map((module) => require.resolve(module)),
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['./vue.js'].map((module) => require.resolve(module)),
    },
  ],
}
