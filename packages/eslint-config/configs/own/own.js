module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  rules: {
    // should not set by `eslint-plugin-node`,
    // and also there is a option by `eslint-config-unicorn`
    'no-process-exit': 'off',

    // conflicts with `unicorn/prevent-abbreviations` auto fixing
    'no-underscore-dangle': 'off',
  },
}
