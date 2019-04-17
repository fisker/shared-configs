module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    require.resolve('../airbnb/rules/imports.js'),
  ],
  rules: {
    'import/first': 'error',
  },
}
