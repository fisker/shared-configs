module.exports = {
  root: true,
  // stupid eslint-plugin-vue override parserOptions
  // https://github.com/vuejs/eslint-plugin-vue/blob/c3111fed451807eb92dc3f5020d144fbd2af9fda/lib/configs/base.js#L8
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  extends: [
    '@fisker/eslint-config',
    './plugins/vue.js',
    './plugins/prettier.js',
  ].map(require.resolve),
  rules: {},
}
