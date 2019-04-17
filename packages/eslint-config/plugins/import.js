module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    require.resolve('../rules/imports.js'),
  ],
  rules: {
    'import/first': 'error',
  },
}
