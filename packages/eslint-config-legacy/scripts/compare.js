import path from 'path'
import has from '../../../shared/has'
import printCompareResult from '../../../shared/eslint/print-compare'

const configs = {
  // eslint-disable-next-line unicorn/import-index
  legacy: require('../index'),

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
    filter({id}, localRules, foreignRules) {
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

printCompareResult(path.join(__dirname, '../docs'), compares, configs)
