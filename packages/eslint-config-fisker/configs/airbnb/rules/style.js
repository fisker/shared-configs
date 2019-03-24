/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

const MAX_PARAMS = 5
const MAX_STATEMENTS = 10

module.exports = {
  rules: {
    // enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['warn', MAX_PARAMS],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['warn', MAX_STATEMENTS],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // airbnb allow this
    'multiline-ternary': ['error', 'never'],

    // allow unnamed function
    'func-names': 'off',

    // allow for...in and for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    // readable
    'no-lonely-if': 'off',

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {exceptAfterSingleLine: false},
    ],

    // allow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // I love this
    // example code
    // context.fillStyle = context.strokeStyle = color
    'no-multi-assign': 'off',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',
  },
}
