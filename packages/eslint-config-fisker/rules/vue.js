module.exports = {
  plugins: ['vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    // allow unused vars
    'vue/no-unused-vars': 'warn',
    // allow unused components
    'vue/no-unused-components': 'warn',
  },
}
