module.exports = {
  extends: ['./own.js'].map(require.resolve),
  env: {
    es6: false,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
    },
  },
  rules: {
    // 必须严格模式
    strict: ['error', 'function'],

    // catch 变量
    'no-catch-shadow': 'warn',
  },
}
