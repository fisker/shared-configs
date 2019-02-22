/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // allow unnessary braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',
  },
}
