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
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',
  },
}
