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
      'off',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],

    // enforce default parameters to be last
    'default-param-last': 'error',

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

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': 'error',

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'off',
  },
}
