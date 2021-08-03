module.exports = {
  plugins: ['regexp'],
  extends: ['plugin:regexp/all'],
  rules: {
    // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
    'regexp/no-super-linear-move': 'off',

    // Alias of `regexp/sort-character-class-elements`
    'regexp/order-in-character-class': 'off',

    // Conflicting with `unicorn/better-regex`
    'regexp/sort-character-class-elements': 'off',
  },
}
