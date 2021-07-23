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

    // disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // disallow assigning to imported bindings
    'no-import-assign': 'error',

    // disallow returning values from setters
    'no-setter-return': 'error',

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // https://eslint.org/docs/rules/no-unsafe-negation#options
    'no-unsafe-negation': ['error', {enforceForOrderingRelations: true}],

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'error',
  },
}
