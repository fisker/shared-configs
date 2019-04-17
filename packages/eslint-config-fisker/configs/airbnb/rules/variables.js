/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // allow unused vars
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // allow functions & classes use before define
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],

    // catch 变量
    'no-catch-shadow': 'error',
  },
}
