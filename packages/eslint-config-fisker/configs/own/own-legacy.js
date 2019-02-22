module.exports = {
  extends: ['./own.js'].map(require.resolve),
  env: {
    es6: false,
  },
  parserOptions: {
    ecmaVersion: 3,
    sourceType: 'script',
  },
  rules: {
    // 必须严格模式
    strict: ['error', 'function'],

    // catch 变量
    'no-catch-shadow': 'warn',
  },
}
