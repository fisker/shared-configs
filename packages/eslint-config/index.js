module.exports = {
  root: true,
  parser: require.resolve('@babel/eslint-parser'),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        allowAwaitOutsideFunction: true,
        plugins: ['exportDefaultFrom'],
      },
    },
  },
  extends: [
    // plugins
    './plugins/import.js',
    './plugins/promise.js',
    './plugins/node.js',
    './plugins/unicorn.js',
    './plugins/eslint-comments.js',
    './plugins/regexp.js',
    './plugins/sonarjs.js',

    // airbnb
    'eslint-config-airbnb-base',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/imports.js',
    './rules/node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js',

    // prettier
    './plugins/prettier.js',
  ].map((id) => require.resolve(id)),
  rules: {
    // should not set by `eslint-plugin-node`,
    // and also there is a option by `eslint-config-unicorn`
    'no-process-exit': 'off',

    // conflicts with `unicorn/prevent-abbreviations` auto fixing
    'no-underscore-dangle': 'off',

    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    // Override airbnb config
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=12.22.1',
      },
    ],

    'import/extensions': 'off',

    // Disable these temporarily, as they conflict with `unicorn/prefer-node-protocol`
    'import/no-unresolved': 'off',
    'node/no-missing-import': 'off',
  },
  overrides: [
    {
      files: ['rollup.config.js'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}
