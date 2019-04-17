import {join} from 'path'
import getResult from '../../../shared/compare-result'
import printer from '../../../shared/markdown-printer'
import writeFile from '../../../shared/write-file'
import has from '../../../shared/has'
import isEqualRuleValue from '../../../shared/is-equal-rule-value'

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
    file: 'compare-legacy-fisker',
    local: 'legacy',
    foreign: 'fisker',
  },
  {
    filter({id}, localRules, foreignRules) {
      return has(foreignRules, id)
    },
    file: 'compare-legacy-airbnb',
    local: 'legacy',
    foreign: 'airbnb/legacy',
  },
]

function getDiffOnlyFilter(filter) {
  return (...arguments_) => {
    return !isEqualRuleValue(...arguments_) && filter(...arguments_)
  }
}

for (const {filter, file, local: localName, foreign: foreignName} of compares) {
  console.log(`building: ${localName} with ${foreignName}`)

  const local = {
    name: localName,
    config: configs[localName],
  }
  const foreign = {
    name: foreignName,
    config: configs[foreignName],
  }

  const resultAll = getResult({filter, local, foreign})
  const resultDiff = getResult({
    filter: getDiffOnlyFilter(filter),
    local,
    foreign,
  })

  const content = [
    '<!-- AUTO GENERATED FILE, DO NOT EDIT -->',
    `# compare`,
    `> compare ${local.name} with ${foreign.name}`,
    `## difference only`,
    printer(resultDiff),
    `## all rules`,
    printer(resultAll),
  ].join('\n\n')

  const destination = join(__dirname, `../docs/${file}.md`)

  writeFile(destination, content)
  console.log(`saved: ${destination}`)
}
