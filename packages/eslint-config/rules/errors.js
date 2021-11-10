/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // airbnb do't allow emptyCatch
    'no-empty': ['error', {allowEmptyCatch: true}],

    // allow cond-assign with parens
    'no-cond-assign': ['error', 'except-parens'],

    // disallow use of console
    'no-console': 'off',

    // no loop check
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['warn', {checkLoops: false}],

    // disallow returning values from setters
    'no-setter-return': 'error',

    // https://eslint.org/docs/rules/no-unsafe-negation#options
    'no-unsafe-negation': ['error', {enforceForOrderingRelations: true}],

    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',
  },
}
