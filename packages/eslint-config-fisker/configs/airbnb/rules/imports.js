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

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],

    // import order
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'ignore',
      },
    ],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**/*.js',
          '__test__/**/*.js',
          'scripts/**/*.js',
          '**/*.test.js',
          '**/*.spec.js',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    // new line
    'import/newline-after-import': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',
  },
}
