export default {
  name: 'prettier(+prettier/unicorn)',
  config: {
    extends: ['eslint-config-prettier', 'eslint-config-prettier/unicorn'].map(
      require.resolve
    ),
  },
}
