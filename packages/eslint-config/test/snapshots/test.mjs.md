# Snapshot report for `test/test.mjs`

The actual snapshot is saved in `test.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## default-case-last.js

> Snapshot 1

    [
      {
        errorCount: 2,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 3,
            endColumn: 10,
            endLine: 4,
            line: 4,
            message: 'Move this "default" clause to the end of this "switch" statement.',
            messageId: 'defaultLast',
            nodeType: null,
            ruleId: 'sonarjs/prefer-default-last',
            severity: 2,
          },
          {
            column: 3,
            endColumn: 10,
            endLine: 6,
            line: 4,
            message: 'Default clause should be the last clause.',
            messageId: 'notLast',
            nodeType: 'SwitchCase',
            ruleId: 'default-case-last',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## default-parameter-last.js

> Snapshot 1

    [
      {
        errorCount: 1,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 12,
            endColumn: 17,
            endLine: 1,
            line: 1,
            message: 'Default parameters should be last.',
            messageId: 'shouldBeLast',
            nodeType: 'AssignmentPattern',
            ruleId: 'default-param-last',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## grouped-accessor-pairs.js

> Snapshot 1

    [
      {
        errorCount: 1,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 3,
            endColumn: 8,
            endLine: 6,
            line: 6,
            message: 'Accessor pair getter \'a\' and setter \'a\' should be grouped.',
            messageId: 'notGrouped',
            nodeType: 'Property',
            ruleId: 'grouped-accessor-pairs',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## jsx.js

> Snapshot 1

    [
      {
        errorCount: 0,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## no-async-promise-executor.js

> Snapshot 1

    [
      {
        errorCount: 4,
        fatalErrorCount: 0,
        fixableErrorCount: 1,
        fixableWarningCount: 0,
        messages: [
          {
            column: 17,
            endColumn: 24,
            endLine: 2,
            line: 2,
            message: 'Replace this trivial promise with "Promise.resolve".',
            messageId: 'promiseAction',
            nodeType: 'Identifier',
            ruleId: 'sonarjs/prefer-promise-shorthand',
            severity: 2,
            suggestions: [
              {
                data: {
                  action: 'resolve',
                },
                desc: 'Replace with "Promise.resolve"',
                fix: {
                  range: [
                    55,
                    101,
                  ],
                  text: 'Promise.resolve(await 1)',
                },
                messageId: 'suggestPromiseAction',
              },
            ],
          },
          {
            column: 25,
            endColumn: 30,
            endLine: 2,
            line: 2,
            message: 'Promise executor functions should not be async.',
            messageId: 'async',
            nodeType: 'Identifier',
            ruleId: 'no-async-promise-executor',
            severity: 2,
          },
          {
            column: 42,
            endColumn: 58,
            endLine: 2,
            line: 2,
            message: 'Return values from promise executor functions cannot be read.',
            messageId: 'returnsValue',
            nodeType: 'CallExpression',
            ruleId: 'no-promise-executor-return',
            severity: 2,
            suggestions: [
              {
                desc: 'Wrap the expression in `{}`.',
                fix: {
                  range: [
                    84,
                    100,
                  ],
                  text: '{resolve(await 1)}',
                },
                messageId: 'wrapBraces',
              },
            ],
          },
          {
            column: 50,
            endColumn: 55,
            endLine: 2,
            fix: {
              range: [
                92,
                98,
              ],
              text: '',
            },
            line: 2,
            message: 'Do not `await` non-promise value.',
            messageId: 'no-unnecessary-await',
            nodeType: 'AwaitExpression',
            ruleId: 'unicorn/no-unnecessary-await',
            severity: 2,
          },
        ],
        suppressedMessages: [
          {
            column: 7,
            endColumn: 10,
            endLine: 2,
            line: 2,
            message: '\'foo\' is assigned a value but never used. Allowed unused vars must match /^_/u.',
            messageId: 'unusedVar',
            nodeType: 'Identifier',
            ruleId: 'no-unused-vars',
            severity: 2,
            suggestions: [
              {
                data: {
                  varName: 'foo',
                },
                desc: 'Remove unused variable \'foo\'.',
                fix: {
                  range: [
                    43,
                    101,
                  ],
                  text: '',
                },
                messageId: 'removeVar',
              },
            ],
            suppressions: [
              {
                justification: '',
                kind: 'directive',
              },
            ],
          },
        ],
        warningCount: 0,
      },
    ]

## no-plusplus.js

> Snapshot 1

    [
      {
        errorCount: 2,
        fatalErrorCount: 0,
        fixableErrorCount: 2,
        fixableWarningCount: 0,
        messages: [
          {
            column: 10,
            endColumn: 11,
            endLine: 1,
            fix: {
              range: [
                9,
                24,
              ],
              text: 'index = 0; index < 3; index',
            },
            line: 1,
            message: 'The variable `i` should be named `index`. A more descriptive name will do too.',
            messageId: 'replace',
            nodeType: 'Identifier',
            ruleId: 'unicorn/prevent-abbreviations',
            severity: 2,
          },
          {
            column: 7,
            endColumn: 8,
            endLine: 2,
            fix: {
              range: [
                36,
                57,
              ],
              text: `index = 0␊
                console.log(index`,
            },
            line: 2,
            message: 'The variable `j` should be named `index`. A more descriptive name will do too.',
            messageId: 'replace',
            nodeType: 'Identifier',
            ruleId: 'unicorn/prevent-abbreviations',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## no-useless-catch.js

> Snapshot 1

    [
      {
        errorCount: 2,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 1,
            endColumn: 2,
            endLine: 6,
            line: 1,
            message: 'Unnecessary try/catch wrapper.',
            messageId: 'unnecessaryCatch',
            nodeType: 'TryStatement',
            ruleId: 'no-useless-catch',
            severity: 2,
          },
          {
            column: 3,
            endColumn: 8,
            endLine: 4,
            line: 4,
            message: 'Add logic to this catch clause or eliminate it and rethrow the exception automatically.',
            messageId: 'uselessCatch',
            nodeType: null,
            ruleId: 'sonarjs/no-useless-catch',
            severity: 2,
          },
        ],
        suppressedMessages: [
          {
            column: 3,
            endColumn: 28,
            endLine: 3,
            line: 3,
            message: '\'doSomethingThatMightThrow\' is not defined.',
            messageId: 'undef',
            nodeType: 'Identifier',
            ruleId: 'no-undef',
            severity: 2,
            suppressions: [
              {
                justification: '',
                kind: 'directive',
              },
            ],
          },
        ],
        warningCount: 0,
      },
    ]

## parser.class-private-methods.js

> Snapshot 1

    [
      {
        errorCount: 3,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 7,
            endColumn: 8,
            endLine: 1,
            line: 1,
            message: '\'A\' is defined but never used. Allowed unused vars must match /^_/u.',
            messageId: 'unusedVar',
            nodeType: 'Identifier',
            ruleId: 'no-unused-vars',
            severity: 2,
            suggestions: [
              {
                data: {
                  varName: 'A',
                },
                desc: 'Remove unused variable \'A\'.',
                fix: {
                  range: [
                    0,
                    17,
                  ],
                  text: '',
                },
                messageId: 'removeVar',
              },
            ],
          },
          {
            column: 10,
            endColumn: 12,
            endLine: 1,
            line: 1,
            message: 'Expected \'this\' to be used by class private method #a.',
            messageId: 'missingThis',
            nodeType: 'FunctionExpression',
            ruleId: 'class-methods-use-this',
            severity: 2,
          },
          {
            column: 10,
            endColumn: 12,
            endLine: 1,
            line: 1,
            message: '\'#a\' is defined but never used.',
            messageId: 'unusedPrivateClassMember',
            nodeType: 'MethodDefinition',
            ruleId: 'no-unused-private-class-members',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## parser.class-private-properties.js

> Snapshot 1

    [
      {
        errorCount: 2,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 7,
            endColumn: 8,
            endLine: 1,
            line: 1,
            message: '\'A\' is defined but never used. Allowed unused vars must match /^_/u.',
            messageId: 'unusedVar',
            nodeType: 'Identifier',
            ruleId: 'no-unused-vars',
            severity: 2,
            suggestions: [
              {
                data: {
                  varName: 'A',
                },
                desc: 'Remove unused variable \'A\'.',
                fix: {
                  range: [
                    0,
                    16,
                  ],
                  text: '',
                },
                messageId: 'removeVar',
              },
            ],
          },
          {
            column: 10,
            endColumn: 12,
            endLine: 1,
            line: 1,
            message: '\'#a\' is defined but never used.',
            messageId: 'unusedPrivateClassMember',
            nodeType: 'PropertyDefinition',
            ruleId: 'no-unused-private-class-members',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## parser.class-properties.js

> Snapshot 1

    [
      {
        errorCount: 1,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 7,
            endColumn: 8,
            endLine: 1,
            line: 1,
            message: '\'A\' is defined but never used. Allowed unused vars must match /^_/u.',
            messageId: 'unusedVar',
            nodeType: 'Identifier',
            ruleId: 'no-unused-vars',
            severity: 2,
            suggestions: [
              {
                data: {
                  varName: 'A',
                },
                desc: 'Remove unused variable \'A\'.',
                fix: {
                  range: [
                    0,
                    15,
                  ],
                  text: '',
                },
                messageId: 'removeVar',
              },
            ],
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## parser.import-meta.js

> Snapshot 1

    [
      {
        errorCount: 1,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [
          {
            column: 7,
            endColumn: 10,
            endLine: 1,
            line: 1,
            message: '\'foo\' is assigned a value but never used. Allowed unused vars must match /^_/u.',
            messageId: 'unusedVar',
            nodeType: 'Identifier',
            ruleId: 'no-unused-vars',
            severity: 2,
            suggestions: [
              {
                data: {
                  varName: 'foo',
                },
                desc: 'Remove unused variable \'foo\'.',
                fix: {
                  range: [
                    0,
                    27,
                  ],
                  text: '',
                },
                messageId: 'removeVar',
              },
            ],
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## unicorn.prefer-node-append.js

> Snapshot 1

    [
      {
        errorCount: 0,
        fatalErrorCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        messages: [],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]

## unicorn.prevent-abbreviations.js

> Snapshot 1

    [
      {
        errorCount: 1,
        fatalErrorCount: 0,
        fixableErrorCount: 1,
        fixableWarningCount: 0,
        messages: [
          {
            column: 7,
            endColumn: 10,
            endLine: 1,
            fix: {
              range: [
                6,
                57,
              ],
              text: `error = new TypeError('my error')␊
              ␊
              export default error`,
            },
            line: 1,
            message: 'The variable `err` should be named `error`. A more descriptive name will do too.',
            messageId: 'replace',
            nodeType: 'Identifier',
            ruleId: 'unicorn/prevent-abbreviations',
            severity: 2,
          },
        ],
        suppressedMessages: [],
        warningCount: 0,
      },
    ]
