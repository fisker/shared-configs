module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',

    // 和 import 规则重复
    'node/no-unpublished-require': 'off',
  },
}
