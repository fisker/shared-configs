import {join} from 'path'
import getResult from '../../../shared/compare-result'
import printer from '../../../shared/markdown-printer'
import writeFile from '../../../shared/write-file'
import has from '../../../shared/has'
import isEqualRuleValue from '../../../shared/is-equal-rule-value'

const configs = {
  // fisker
  // eslint-disable-next-line unicorn/import-index
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

  'unicorn/recommended + prettier/unicorn': {
    plugins: ['unicorn'],
    extends: [
      'plugin:unicorn/recommended',
      require.resolve('eslint-config-prettier/unicorn'),
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
    file: 'compare-fisker-airbnb',
    local: 'fisker',
    foreign: 'airbnb',
  },
  {
    filter({prefix}) {
      return !prefix || prefix === 'import'
    },
    file: 'compare-fisker-airbnb-prettier',
    local: 'fisker',
    foreign: 'airbnb + prettier',
  },
  // plugins
  {
    filter({prefix}) {
      return prefix === 'eslint-comments'
    },
    file: 'compare-fisker-eslint-comments',
    local: 'fisker',
    foreign: 'eslint-comments/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'promise'
    },
    file: 'compare-fisker-promise',
    local: 'fisker',
    foreign: 'promise/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'unicorn'
    },
    file: 'compare-fisker-unicorn',
    local: 'fisker',
    foreign: 'unicorn/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'unicorn'
    },
    file: 'compare-fisker-unicorn-prettier',
    local: 'fisker',
    foreign: 'unicorn/recommended + prettier/unicorn',
  },
  {
    filter({prefix}) {
      return prefix === 'import'
    },
    file: 'compare-fisker-import',
    local: 'fisker',
    foreign: 'import/error + import/warning',
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
