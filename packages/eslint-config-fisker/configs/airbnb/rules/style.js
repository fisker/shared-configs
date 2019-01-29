/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // enforce a maximum line length
    'max-len': [
      'warn',
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

    // allow plusplus in loop
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

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

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'warn',
      'always',
      {exceptAfterSingleLine: false},
    ],

    // allow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // example code
    // context.fillStyle = context.strokeStyle = color
    'no-multi-assign': 'warn',

    // editor-config takes care of this
    'linebreak-style': 'off',
  },
}
