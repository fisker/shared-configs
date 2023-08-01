module.exports = {
  extends: [require.resolve('eslint-config-prettier')],
  rules: {
    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],
  },
}
