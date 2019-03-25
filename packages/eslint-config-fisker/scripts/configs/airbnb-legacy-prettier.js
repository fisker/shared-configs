export default {
  name: 'airbnb-base/legacy + prettier',
  config: {
    extends: ['eslint-config-airbnb-base/legacy', 'eslint-config-prettier'].map(
      require.resolve
    ),
  },
}
