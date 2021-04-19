module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'node/no-unpublished-require': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'node/no-unpublished-import': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'node/no-extraneous-require': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'node/no-extraneous-import': 'off',

    // duplicate of `import/no-unresolved`
    'node/no-missing-require': 'off',

    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=12.22.1',
      },
    ],
  },
}
