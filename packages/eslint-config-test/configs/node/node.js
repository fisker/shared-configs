module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',

    // duplicate of `import/no-extraneous-dependencies`
    'node/no-unpublished-require': 'off',

    // duplicate of `import/no-unresolved`
    'node/no-missing-require': 'off',
  },
}
