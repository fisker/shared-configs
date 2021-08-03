import path from 'node:path'
import url from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import importCommonJs from 'import-commonjs'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const require = importCommonJs(import.meta.url)
const dirname = path.dirname(url.fileURLToPath(import.meta.url))

const configs = {
  vue: require('../index.js'),

  'vue/recommended': {
    plugins: ['vue'],
    extends: ['plugin:vue/recommended'],
  },

  'vue/recommended + prettier': {
    plugins: ['vue'],
    extends: [
      'plugin:vue/recommended',
      require.resolve('eslint-config-prettier'),
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
    foreign: 'vue/recommended + prettier',
  },
]

printCompareResult(path.join(dirname, '../docs'), compares, configs)
