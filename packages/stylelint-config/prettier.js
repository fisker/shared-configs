module.exports = {
  plugins: ['stylelint-prettier'].map((module) => require.resolve(module)),
  extends: ['stylelint-config-prettier'].map((module) =>
    require.resolve(module)
  ),
  rules: {
    'prettier/prettier': true,
  },
}
