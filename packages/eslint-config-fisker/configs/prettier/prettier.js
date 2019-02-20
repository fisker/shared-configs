module.exports = {
  plugins: ['eslint-plugin-prettier'].map(require.reslove),
  extends: ['eslint-config-prettier'].map(require.resolve),
  rules: {
    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    'prettier/prettier': 'off',
  },
}
