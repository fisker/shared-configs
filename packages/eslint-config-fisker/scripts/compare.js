import {join} from 'path'
import getResult from './shared/compare-result'
import printer from './shared/markdown-printer'
import writeFile from './shared/write-file'
import has from './shared/has'
import isEqualRuleValue from './shared/is-equal-rule-value'

const configs = {
  fisker: require('./configs/fisker').default,
  airbnb: require('./configs/airbnb').default,
  prettier: require('./configs/prettier-unicorn').default,
}

const compares = [
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-fisker-airbnb',
    local: configs.fisker,
    foreign: configs.airbnb,
  },
  {
    filter({prefix, id}, localRules, foreignRules) {
      return (
        (prefix === 'prettier' || prefix === 'unicorn' || !prefix) &&
        has(foreignRules, id)
      )
    },
    file: 'compare-fisker-prettier',
    local: configs.fisker,
    foreign: configs.prettier,
  },
]

function getDiffOnlyFilter(filter) {
  return (...args) => {
    return !isEqualRuleValue(...args) && filter(...args)
  }
}

for (const {filter, file, local, foreign} of compares) {
  const resultAll = getResult({filter, local, foreign})
  const resultDiff = getResult({
    filter: getDiffOnlyFilter(filter),
    local,
    foreign,
  })

  const content = [
    `# compare ${local.name} with ${foreign.name}`,
    `## difference only`,
    printer(resultDiff),
    `## all rules`,
    printer(resultAll),
  ].join('\n\n')

  writeFile(join(__dirname, `../docs/${file}.md`), content)
}
