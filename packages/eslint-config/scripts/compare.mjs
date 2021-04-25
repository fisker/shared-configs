import path from 'node:path'
import url from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import importCommonJs from 'import-commonjs'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const require = importCommonJs(import.meta.url)
const dirname = path.dirname(url.fileURLToPath(import.meta.url))

const configs = {
  // fisker
  fisker: require('../index'),

  // airbnb
  airbnb: {
    extends: ['eslint-config-airbnb-base'].map(require.resolve),
  },
  'airbnb + prettier': {
    extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(
      require.resolve
    ),
  },

  // plugins
  'eslint-comments/recommended': {
    plugins: ['eslint-comments'],
    extends: ['plugin:eslint-comments/recommended'],
  },

  'promise/recommended': {
    plugins: ['promise'],
    extends: ['plugin:promise/recommended'],
  },

  'unicorn/recommended': {
    plugins: ['unicorn'],
    extends: ['plugin:unicorn/recommended'],
  },

  'unicorn/recommended + prettier': {
    plugins: ['unicorn'],
    extends: [
      'plugin:unicorn/recommended',
      require.resolve('eslint-config-prettier'),
    ],
  },

  'import/error + import/warning': {
    plugins: ['import'],
    extends: ['plugin:import/errors', 'plugin:import/warnings'],
  },
}

const compares = [
  // default
  {
    filter({prefix}) {
      return !prefix || prefix === 'import'
    },
    file: 'compare-with-airbnb',
    local: 'fisker',
    foreign: 'airbnb',
  },
  {
    filter({prefix}) {
      return !prefix || prefix === 'import'
    },
    file: 'compare-with-airbnb-prettier',
    local: 'fisker',
    foreign: 'airbnb + prettier',
  },
  // plugins
  {
    filter({prefix}) {
      return prefix === 'eslint-comments'
    },
    file: 'compare-with-eslint-comments',
    local: 'fisker',
    foreign: 'eslint-comments/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'promise'
    },
    file: 'compare-with-promise',
    local: 'fisker',
    foreign: 'promise/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'unicorn'
    },
    file: 'compare-with-unicorn',
    local: 'fisker',
    foreign: 'unicorn/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'unicorn'
    },
    file: 'compare-with-unicorn-prettier',
    local: 'fisker',
    foreign: 'unicorn/recommended + prettier',
  },
  {
    filter({prefix}) {
      return prefix === 'import'
    },
    file: 'compare-with-import',
    local: 'fisker',
    foreign: 'import/error + import/warning',
  },
]

printCompareResult(path.join(dirname, '../docs'), compares, configs)
