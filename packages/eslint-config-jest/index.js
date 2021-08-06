module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/valid-title': 'off',

    'unicorn/prefer-module': 'off',
  },
  globals: {
    require: 'readonly',
    __filename: 'readonly',
    __dirname: 'readonly',
  },
}
