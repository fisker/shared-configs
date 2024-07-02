import eslintPluginPromise from 'eslint-plugin-promise'

export default [
  {
    plugins: {promise: eslintPluginPromise},
    rules: {
      ...eslintPluginPromise.configs.recommended.rules,

      // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
      'promise/always-return': 'off',

      // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
      'promise/catch-or-return': 'off',

      // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
      'promise/no-return-wrap': ['error', {allowReject: true}],
    },
  },
]
