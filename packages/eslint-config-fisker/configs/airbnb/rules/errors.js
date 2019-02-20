/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    'no-empty': ['error', {allowEmptyCatch: true}],
    'no-cond-assign': ['error', 'except-parens'],

    // no loop check
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['warn', {checkLoops: false}],
  },
}
