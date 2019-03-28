import {join} from 'path'
import getResult from './shared/compare-result'
import printer from './shared/markdown-printer'
import writeFile from './shared/write-file'
import has from './shared/has'
import isEqualRuleValue from './shared/is-equal-rule-value'

const configs = {
  // fisker
  fisker: require('./configs/fisker-default').default,
  'fisker/legacy': require('./configs/fisker-legacy').default,
  'fisker/vue': require('./configs/fisker-vue').default,
  // airbnb
  airbnb: require('./configs/airbnb').default,
  'airbnb+prettier': require('./configs/airbnb-prettier').default,
  // legacy
  'airbnb/legacy': require('./configs/airbnb-legacy').default,
  'airbnb/legacy+prettier': require('./configs/airbnb-legacy-prettier').default,
  // plugins
  prettier: require('./configs/prettier-unicorn').default,
  'eslint-comments': require('./configs/eslint-comments').default,
  promise: require('./configs/promise').default,
  unicorn: require('./configs/unicorn').default,
  // vue
  vue: require('./configs/vue').default,
  'vue+prettier': require('./configs/vue-prettier').default,
}

const compares = [
  // default
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-fisker-airbnb',
    local: configs.fisker,
    foreign: configs.airbnb,
  },
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-fisker-airbnb-prettier',
    local: configs.fisker,
    foreign: configs['airbnb+prettier'],
  },
  // legacy
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-legacy-airbnb-legacy',
    local: configs['fisker/legacy'],
    foreign: configs['airbnb/legacy'],
  },
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-legacy-airbnb-legacy-prettier',
    local: configs['fisker/legacy'],
    foreign: configs['airbnb/legacy+prettier'],
  },
  // vue
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-vue-vue',
    local: configs['fisker/vue'],
    foreign: configs.vue,
  },
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-vue-vue-prettier',
    local: configs['fisker/vue'],
    foreign: configs['vue+prettier'],
  },
  // plugins
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
  {
    filter({prefix}) {
      return prefix === 'eslint-comments'
    },
    file: 'compare-fisker-eslint-comments',
    local: configs.fisker,
    foreign: configs['eslint-comments'],
  },
  {
    filter({prefix}) {
      return prefix === 'promise'
    },
    file: 'compare-fisker-promise',
    local: configs.fisker,
    foreign: configs.promise,
  },
  {
    filter({prefix}) {
      return prefix === 'unicorn'
    },
    file: 'compare-fisker-unicorn',
    local: configs.fisker,
    foreign: configs.unicorn,
  },
  // default
  {
    filter() {
      return true
    },
    file: 'compare-fisker-legacy',
    local: configs.fisker,
    foreign: configs['fisker/legacy'],
  },
]

function getDiffOnlyFilter(filter) {
  return (...arguments_) => {
    return !isEqualRuleValue(...arguments_) && filter(...arguments_)
  }
}

for (const {filter, file, local, foreign} of compares) {
  console.log(`building: ${local.name} with ${foreign.name}`)

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
