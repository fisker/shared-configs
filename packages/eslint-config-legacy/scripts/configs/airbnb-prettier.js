export default {
  name: 'airbnb-base + prettier',
  config: {
    extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(
      require.resolve
    ),
  },
}
