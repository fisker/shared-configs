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

    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // disallow creation of functions within loops
    'no-loop-func': 'warn',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'warn',

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    // airbnb allow this
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    // airbnb allow this
    'no-implicit-globals': 'error',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    // airbnb allow this
    'no-unmodified-loop-condition': 'error',

    // disallow unnecessary .call() and .apply()
    // airbnb allow this
    'no-useless-call': 'error',

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    // airbnb allow this
    'no-useless-catch': 'error',
  },
}
