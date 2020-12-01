import path from 'path'
import url from 'url'
// eslint-disable-next-line import/no-extraneous-dependencies
import importCommonJs from 'import-commonjs'
import has from '../../../shared/has.mjs'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const require = importCommonJs(import.meta.url)
const dirname = path.dirname(url.fileURLToPath(import.meta.url))

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

printCompareResult(path.join(dirname, '../docs'), compares, configs)
