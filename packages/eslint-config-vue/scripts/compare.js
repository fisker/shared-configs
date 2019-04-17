import {join} from 'path'
import getResult from '../../../shared/compare-result'
import printer from '../../../shared/markdown-printer'
import writeFile from '../../../shared/write-file'
import has from '../../../shared/has'
import isEqualRuleValue from '../../../shared/is-equal-rule-value'

const configs = {
  // eslint-disable-next-line unicorn/import-index
  vue: require('../index'),

  'vue/recommended': {
    plugin: ['vue'],
    extends: ['plugin:vue/recommended'],
  },

  'vue/recommended + prettier/vue': {
    plugin: ['vue'],
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
    file: 'compare-vue-vue',
    local: 'vue',
    foreign: 'vue/recommended',
  },
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-vue-vue-prettier',
    local: 'vue',
    foreign: 'vue/recommended + prettier/vue',
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
