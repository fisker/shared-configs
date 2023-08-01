import path from 'node:path'
import createEsmUtils from 'esm-utils'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const {require, dirname} = createEsmUtils(import.meta)

const configs = {
  vue: require('../index.js'),

  'vue/recommended': {
    plugins: ['vue'],
    extends: ['plugin:vue/recommended'],
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
]

await printCompareResult(path.join(dirname, '../docs'), compares, configs)
