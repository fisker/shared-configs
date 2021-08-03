module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/stage-0',
    require.resolve('../rules/imports.js'),
  ],
  rules: {
    'import/first': 'error',
    'import/extensions': ['error', 'always', {ignorePackages: true}],
    'import/order': 'error',
  },
}
