module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  rules: {
    // conflicts with `unicorn/prevent-abbreviations` auto fixing
    'no-underscore-dangle': 'off',
  },
}
