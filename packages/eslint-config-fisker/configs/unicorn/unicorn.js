module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    // TODO: set this rule to `warn` after bug fixed
    // bug desc https://github.com/sindresorhus/eslint-plugin-unicorn/issues/255
    'unicorn/catch-error-name': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
    // sometimes readable
    'unicorn/regex-shorthand': 'warn',

    'unicorn/no-process-exit': 'off',

    'unicorn/prefer-add-event-listener': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md    'unicorn/prefer-add-event-listener': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-node-remove': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    // 'unicorn/no-for-loop': 'off',

    // TODO: enable this rule after bug fixed
    // bug desc https://github.com/sindresorhus/eslint-plugin-unicorn/issues/254
    'unicorn/prefer-spread': 'off',
  },
}
