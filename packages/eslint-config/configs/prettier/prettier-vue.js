module.exports = {
  plugins: ['vue'],
  extends: [
    'plugin:vue/no-layout-rules',
    require.resolve('./prettier.js'),
    require.resolve('eslint-config-prettier/vue'),
  ],
}
