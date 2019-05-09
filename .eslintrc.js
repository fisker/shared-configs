/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.js https://git.io/fjJKA
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* eslint-config-fisker https://git.io/fjJKy */

module.exports = {
  root: true,
  parserOptions: {},
  extends: ['@self'],
  settings: {},
  rules: {},
  plugins: [],
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
