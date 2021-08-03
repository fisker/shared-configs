import path from 'node:path'
import url from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import importCommonJs from 'import-commonjs'
import has from '../../../shared/has.mjs'
import printCompareResult from '../../../shared/eslint/print-compare.mjs'

const require = importCommonJs(import.meta.url)
const dirname = path.dirname(url.fileURLToPath(import.meta.url))

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

printCompareResult(path.join(dirname, '../docs'), compares, configs)
