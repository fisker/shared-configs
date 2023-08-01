/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.cjs https://git.io/fjVjK
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* @fisker/eslint-config https://git.io/fjOeH */

module.exports = {
  root: true,
  env: {},
  parserOptions: {},
  extends: [require.resolve('./packages/eslint-config/index.js')],
  settings: {},
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  plugins: [],
  globals: {},
  overrides: [],
}
