module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/node-builtins': 'off',
    'node/no-unsupported-features/es-builtins': 'off',
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

    'node/prefer-global/buffer': ['error', 'never'],
    'node/prefer-global/process': ['error', 'never'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],

    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    'node/no-path-concat': 'error',
    'node/no-new-require': 'error',
  },
}
