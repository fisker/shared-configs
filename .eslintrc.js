/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.js https://git.io/fjJKA
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* @fisker/eslint-config https://git.io/fjOeH */

module.exports = {
  root: true,
  env: {},
  parserOptions: {},
  extends: ['@self'],
  settings: {},
  rules: {},
  plugins: [],
  globals: {},
  overrides: [
    {
      files: [
        'packages/*/scripts/**',
        'shared/**',
        'packages/*/test.js',
        'lint-staged.config.js',
        '.huskyrc.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
