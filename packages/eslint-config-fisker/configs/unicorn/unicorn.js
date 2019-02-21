module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': 'warn',

    // allow if (array.length) {}
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
    'unicorn/regex-shorthand': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
    'unicorn/prefer-exponentiation-operator': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-node-remove': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
    'unicorn/prefer-text-content': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    // not released yet
    // TODO: enable rule after `eslint-plugin-unicorn` release
    // 'unicorn/no-for-loop': 'warn',
  },
}
