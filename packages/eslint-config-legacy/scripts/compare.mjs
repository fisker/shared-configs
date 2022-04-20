import path from 'node:path'
import createEsmUtils from 'esm-utils'
import has from '../../../shared/has.mjs'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const {require, dirname} = createEsmUtils(import.meta)

const configs = {
  legacy: require('../index.js'),

  // fisker
  fisker: {
    extends: '@fisker/eslint-config',
  },

  'airbnb/legacy': {
    extends: 'eslint-config-airbnb-base/legacy',
  },
}

const compares = [
  {
    filter({id}, localRules /* , foreignRules */) {
      return has(localRules, id)
    },
    file: 'compare-with-fisker',
    local: 'legacy',
    foreign: 'fisker',
  },
  {
    filter({id}, localRules, foreignRules) {
      return has(foreignRules, id)
    },
    file: 'compare-with-airbnb',
    local: 'legacy',
    foreign: 'airbnb/legacy',
  },
]

await printCompareResult(path.join(dirname, '../docs'), compares, configs)
