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
    requireConfigFile: false,
    attachComment: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    babelOptions: {
      babelrc: false,
      configFile: false,
      parserOpts: {
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true,
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

    'import/extensions': ['error', 'always', {ignorePackages: true}],

    // Default options seems not working without second option
    'import/order': ['error', {}],

    // Disable these temporarily, as they conflict with `unicorn/prefer-node-protocol`
    'import/no-unresolved': 'off',

    'node/no-unsupported-features/node-builtins': 'off',

    'node/no-missing-import': 'off',
  },
  reportUnusedDisableDirectives: true,
}
