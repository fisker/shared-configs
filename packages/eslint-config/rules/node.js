/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // allow `require` called anywhere
    // https://eslint.org/docs/rules/global-require
    'global-require': 'off',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': ['error', 'error'],
  },
}
