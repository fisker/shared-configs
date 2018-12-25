module.exports = {
  rules: {
    // allow url, comments, regexp length over 80
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ],
    // iife style inside
    'wrap-iife': ['error', 'inside'],
    // no space before function parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    // operator linebreak
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore'
        }
      }
    ],
    // warn indent
    indent: 'warn',
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
        ignoreRestSiblings: true
      }
    ],
    // allow vars not on top
    'vars-on-top': 'off',
    // allow functions & classes use before define
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true
      }
    ],
    // allow param reassign
    'no-param-reassign': 'off',
    // allow function returns no value
    'consistent-return': 'off',
    // allow empty catch
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // allow plusplus in loop
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    // allow for...in and for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ]
  }
}