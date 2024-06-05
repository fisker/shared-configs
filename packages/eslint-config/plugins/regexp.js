import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintPluginRegexp} = await importPreferLocal(
  'eslint-plugin-regexp',
)

export default [
  eslintPluginRegexp.configs['flat/all'],
  {
    rules: {
      // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
      'regexp/no-super-linear-move': 'off',

      // Alias of `regexp/sort-character-class-elements`
      'regexp/order-in-character-class': 'off',

      // Conflicting with `unicorn/better-regex`
      'regexp/sort-character-class-elements': 'off',

      // Conflicting with `unicorn/better-regex`
      'regexp/match-any': ['error', {allows: ['dotAll', String.raw`[\S\s]`]}],

      // Conflicting with `unicorn/better-regex`
      'regexp/strict': 'off',

      // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html#stricttypes-false
      'regexp/no-useless-flag': ['error', {strictTypes: false}],

      // Lookbehind assertions cannot be transpiled
      // https://github.com/babel/babel/issues/11086#issuecomment-581157679
      'regexp/prefer-lookaround': 'off',

      // Enable these in future
      'regexp/prefer-named-capture-group': 'off',
      'regexp/require-unicode-regexp': 'off',
      'regexp/require-unicode-sets-regexp': 'off',
    },
  },
]
