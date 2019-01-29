/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

// https://github.com/benmosher/eslint-plugin-import

module.exports = {
  rules: {
    // allow single export
    'import/prefer-default-export': 'off',

    // enforces use extensions
    'import/extensions': ['warn', 'ignorePackages'],

    // import order
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'ignore',
      },
    ],

    // new line
    'import/newline-after-import': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',
  },
}
