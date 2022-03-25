module.exports = {
  plugins: ['n'],
  extends: ['plugin:n/recommended'],
  rules: {
    'n/no-unsupported-features/node-builtins': 'off',
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'n/no-unpublished-require': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'n/no-unpublished-import': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'n/no-extraneous-require': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'n/no-extraneous-import': 'off',

    // duplicate of `import/no-unresolved`
    'n/no-missing-require': 'off',

    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/process': ['error', 'never'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],

    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',

    'n/no-path-concat': 'error',
    'n/no-new-require': 'error',
    'n/no-process-exit': 'off',
  },
}
