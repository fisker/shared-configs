module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/no-disabled-tests': 'warn',
  },
}
