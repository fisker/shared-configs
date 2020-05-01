import {join} from 'path'
import has from '../../../shared/has'
import printCompareResult from '../../../shared/eslint/print-compare'

const configs = {
  // eslint-disable-next-line unicorn/import-index
  vue: require('../index'),

  'vue/recommended': {
    plugins: ['vue'],
    extends: ['plugin:vue/recommended'],
  },

  'vue/recommended + prettier/vue': {
    plugins: ['vue'],
    extends: [
      'plugin:vue/recommended',
      require.resolve('eslint-config-prettier/vue'),
    ],
  },
}

const compares = [
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-with-vue',
    local: 'vue',
    foreign: 'vue/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-with-vue-prettier',
    local: 'vue',
    foreign: 'vue/recommended + prettier/vue',
  },
]

printCompareResult(join(__dirname, '../docs'), compares, configs)
