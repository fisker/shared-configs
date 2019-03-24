/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    // airbnb disabled this
    'no-async-promise-executor': 'error',

    // airbnb do't allow emptyCatch
    'no-empty': ['error', {allowEmptyCatch: true}],

    // allow cond-assign with parens
    'no-cond-assign': ['error', 'except-parens'],

    // no loop check
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['warn', {checkLoops: false}],
  },
}
