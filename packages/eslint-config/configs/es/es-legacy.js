module.exports = {
  extends: ['./es.js'].map(require.resolve),
  rules: {
    'plugin:es/no-2018': 'error',
    'plugin:es/no-2017': 'error',
    'plugin:es/no-2016': 'error',
    'plugin:es/no-2015': 'error',
    'plugin:es/no-5': 'error',
  },
}
