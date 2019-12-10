/*
 * override airbnb
 * repo: https://github.com/airbnb/javascript
 * code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 */

// https://github.com/benmosher/eslint-plugin-import

const noExtraneousDependencies = (() => {
  const {rules} = require('eslint-config-airbnb-base/rules/imports')
  const rule = rules['import/no-extraneous-dependencies']
  const [errorLevel, options] = rule

  return [
    errorLevel,
    {
      ...options,
      devDependencies: ['!src/**'],
      optionalDependencies: false,
      peerDependencies: false,
    },
  ]
})()

module.exports = {
  rules: {
    /*
     * disallow use of jsdoc-marked-deprecated imports
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'error',

    'import/no-extraneous-dependencies': noExtraneousDependencies,

    // allow single export
    'import/prefer-default-export': 'off',

    /*
     * allow dynamic require
     * Forbid require() calls with expressions
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'off',

    /*
     * This rule enforces that all exports are declared at the bottom of the file.
     * https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
     * airbnb allow this
     */
    'import/exports-last': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
}
