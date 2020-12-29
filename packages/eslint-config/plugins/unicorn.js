module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-dom-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
    'unicorn/prefer-dom-node-remove': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkDefaultAndNamespaceImports: true,
        checkShorthandProperties: true,
        checkShorthandImports: true,
      },
    ],

    // warn
    'unicorn/expiring-todo-comments': 'warn',

    // disable this
    'unicorn/prefer-dom-node-text-content': 'off',

    // disable this
    'unicorn/prefer-dom-node-dataset': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    // buggy https://github.com/sindresorhus/eslint-plugin-unicorn/issues/391
    'unicorn/consistent-function-scoping': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    // I'll decide myself
    'unicorn/prefer-modern-dom-apis': 'off',

    // covered by `prefer-exponentiation-operator`
    'unicorn/prefer-exponentiation-operator': 'off',

    'unicorn/no-array-callback-reference': 'warn',

    'unicorn/no-null': 'warn',

    // I love `reduce`
    'unicorn/no-array-reduce': 'off',

    // Allow `.length !== 0`
    'unicorn/explicit-length-check': ['error', {'non-zero': 'not-equal'}],

    // Sometimes `if-else` is more readable
    'unicorn/prefer-ternary': 'off',

    // Unsafe
    'unicorn/prefer-default-parameters': 'off',
  },
}
