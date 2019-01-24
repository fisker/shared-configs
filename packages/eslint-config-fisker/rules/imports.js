module.exports = {
  rules: {
    // allow single export
    'import/prefer-default-export': 'off',
    // enforces use extensions
    'import/extensions': ['error', 'ignorePackages'],
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
  },
}
