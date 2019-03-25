export default {
  name: 'airbnb-base/legacy',
  config: {
    extends: ['eslint-config-airbnb-base/legacy'].map(require.resolve),
  },
}
