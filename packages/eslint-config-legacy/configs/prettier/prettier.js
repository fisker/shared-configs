module.exports = {
  plugins: ['prettier'],
  extends: ['eslint-config-prettier', 'eslint-config-prettier/unicorn'].map(
    require.resolve
  ),
  rules: {
    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    'prettier/prettier': 'error',
  },
}
