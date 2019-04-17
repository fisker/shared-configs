export default {
  name: 'airbnb-base',
  config: {
    extends: ['eslint-config-airbnb-base'].map(require.resolve),
  },
}
