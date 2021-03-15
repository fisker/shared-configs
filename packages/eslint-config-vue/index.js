const base = require('@fisker/eslint-config')

module.exports = {
  root: true,
  parser: base.parser,
  // eslint-plugin-vue override parserOptions
  // https://github.com/vuejs/eslint-plugin-vue/blob/c3111fed451807eb92dc3f5020d144fbd2af9fda/lib/configs/base.js#L8
  parserOptions: {
    ...base.parserOptions,
    parser: base.parser,
  },
  extends: ['@fisker/eslint-config', './plugins/vue.js'].map(require.resolve),
  rules: {},
}
