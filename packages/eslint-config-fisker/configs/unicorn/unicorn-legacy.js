module.exports = {
  extends: ['./unicorn.js'].map(require.resolve),
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
    'unicorn/prefer-exponentiation-operator': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    // not released yet
    // TODO: enable rule after `eslint-plugin-unicorn` release
    // 'unicorn/no-for-loop': 'off',
  },
}
