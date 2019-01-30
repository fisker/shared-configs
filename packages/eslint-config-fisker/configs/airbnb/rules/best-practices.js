/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // allow vars not on top
    'vars-on-top': 'off',

    // allow reassignment of function parameters
    'no-param-reassign': 'off',

    // allow function returns no value
    'consistent-return': [
      'warn',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],

    // allow return assign in parents
    'no-return-assign': ['error', 'except-parens'],

    // don't allow comparisons to null
    'no-eq-null': 'error',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['warn', {allowElseIf: false}],

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['warn', {allowImplicit: true}],

    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // disallow creation of functions within loops
    'no-loop-func': 'warn',

    // disallow use of `javascript:` urls.
    'no-script-url': 'warn',
  },
}
