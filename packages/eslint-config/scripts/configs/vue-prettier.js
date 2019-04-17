export default {
  name: 'vue/recommended + vue/no-layout-rules + prettier + prettier/vue',
  config: {
    plugins: ['vue'],
    extends: [
      'plugin:vue/recommended',
      require.resolve('eslint-config-prettier'),
      require.resolve('eslint-config-prettier/vue'),
    ],
  },
}
