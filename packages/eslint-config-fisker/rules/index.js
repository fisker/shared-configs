module.exports = {
  rules: {
    // allow url, comments, regexp length over 80
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // allow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',

    // allow multi assign
    'no-multi-assign': 'off',

    // allow unnamed function
    'func-names': 'off',

    // allow unused vars
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // allow vars not on top
    'vars-on-top': 'off',

    // allow functions & classes use before define
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],

    // allow param reassign
    'no-param-reassign': 'off',

    // allow function returns no value
    'consistent-return': [
      'warn',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],

    // allow empty catch
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    // allow plusplus in loop
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

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

    // allow return assign in parents
    'no-return-assign': ['error', 'except-parens'],

    // don't allow comparisons to null
    'no-eq-null': 'error',

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
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'warn',
      'always',
      {exceptAfterSingleLine: false},
    ],

    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['warn', {allowElseIf: false}],

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['warn', {allowImplicit: true}],

    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'except-parens'],

    // single quote confilct with prettier
    quotes: [
      'error',
      'single',
      {allowTemplateLiterals: true, avoidEscape: true},
    ],
  },
}
