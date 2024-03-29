import path from 'node:path'
import createEsmUtils from 'esm-utils'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const {require, dirname} = createEsmUtils(import.meta)

const configs = {
  // fisker
  fisker: require('../index.js'),

  // airbnb
  airbnb: {
    extends: ['eslint-config-airbnb-base'].map((module) =>
      require.resolve(module),
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
      return prefix === 'import'
    },
    file: 'compare-with-import',
    local: 'fisker',
    foreign: 'import/error + import/warning',
  },
]

await printCompareResult(path.join(dirname, '../docs'), compares, configs)
