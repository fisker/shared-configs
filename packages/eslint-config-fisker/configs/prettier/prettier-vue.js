module.exports = {
  extends: [
    'plugin:vue/no-layout-rules',
    './prettier.js',
    'eslint-config-prettier/vue',
  ].map(require.resolve),
}
