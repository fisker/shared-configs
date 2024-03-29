const base = require('@fisker/eslint-config')

module.exports = {
  root: true,
  parser: require.resolve('vue-eslint-parser'),
  // eslint-plugin-vue override parserOptions
  // https://github.com/vuejs/eslint-plugin-vue/blob/c3111fed451807eb92dc3f5020d144fbd2af9fda/lib/configs/base.js#L8
  parserOptions: {
    ...base.parserOptions,
    parser: base.parser,
  },
  extends: ['./plugins/vue.js', '@fisker/eslint-config'].map((module) =>
    require.resolve(module),
  ),
  rules: {
    // https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'any',
          component: 'any',
        },
        svg: 'any',
        math: 'any',
      },
    ],
  },
}
