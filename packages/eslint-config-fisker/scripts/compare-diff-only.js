const {CLIEngine} = require('eslint')
const {join} = require('path')
const {mkdirSync, writeFileSync, existsSync} = require('fs')

const ruleLinks = {}

function has(obj, key) {
  return obj && Object.prototype.hasOwnProperty.call(obj, key)
}

function sortRuleId(a, b) {
  const {prefix: aPrefix, rule: aRule} = splitRuleId(a)
  const {prefix: bPrefix, rule: bRule} = splitRuleId(b)
  if (aPrefix > bPrefix) {
    return 1
  }

  if (aPrefix < bPrefix) {
    return -1
  }

  if (aRule > bRule) {
    return 1
  }

  if (aRule < bRule) {
    return -1
  }

  return 0
}

function getRuleLink(ruleId, rule = {}) {
  const {meta = {}} = rule
  const {docs = {}} = meta
  const {url = ''} = docs

  return url
}

function parseRuleValue(value) {
  if (Array.isArray(value)) {
    value = value[0]
  }

  if (typeof value === 'number') {
    return ['off', 'warn', 'error'][value]
  }

  return value
}

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: {
      extends: config,
    },
    useEslintrc: false,
  })

  const {rules} = engine.config.baseConfig
  const ruleSets = engine.getRules()

  for (const ruleId of Object.keys(rules)) {
    const value = parseRuleValue(rules[ruleId])

    if (!ruleLinks[ruleId]) {
      ruleLinks[ruleId] = getRuleLink(ruleId, ruleSets.get(ruleId))
    }

    rules[ruleId] = value
  }
  return rules
}

function splitRuleId(ruleId) {
  const [prefix, rule] = ruleId.split('/')

  if (!rule) {
    return {
      prefix: '',
      rule: prefix,
    }
  }

  return {
    prefix,
    rule,
  }
}

const compares = [
  {
    filter(ruleId, localRules, foreignRules) {
      const {prefix} = splitRuleId(ruleId)

      return Boolean(prefix)
    },
    local: {
      name: 'fisker',
      config: ['../index.js'].map(require.resolve),
    },
    foreign: {
      name: 'airbnb (+ whitespace)',
      config: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/whitespace',
      ].map(require.resolve),
    },
  },
  {
    filter(ruleId, localRules, foreignRules) {
      const {prefix} = splitRuleId(ruleId)
      return (
        prefix === 'prettier' ||
        prefix === 'unicorn' ||
        (!prefix && has(foreignRules, ruleId))
      )
    },
    local: {
      name: 'fisker',
      config: ['../index.js'].map(require.resolve),
    },
    foreign: {
      name: 'prettier (+ unicorn)',
      config: ['eslint-config-prettier', 'eslint-config-prettier/unicorn'].map(
        require.resolve
      ),
    },
  },
]

const markdownBody = ['# compare']

for (const compare of compares) {
  const {local, foreign, filter} = compare

  markdownBody.push(`## ${local.name} VS ${foreign.name}`)

  const table = [['rule', local.name, foreign.name], [':-:', ':-:', ':-:']]

  const localRules = getRules(local.config)
  const foreignRules = getRules(foreign.config)
  const rulesIds = [
    ...new Set([...Object.keys(localRules), ...Object.keys(foreignRules)]),
  ]
    .sort(sortRuleId)
    .filter(ruleId => localRules[ruleId] !== foreignRules[ruleId])
    .filter(ruleId => filter(ruleId, localRules, foreignRules))

  for (const ruleId of rulesIds) {
    table.push([
      ruleLinks[ruleId] ? `[${ruleId}](${ruleLinks[ruleId]})` : ruleId,
      localRules[ruleId] || '-',
      foreignRules[ruleId] || '-',
    ])
  }

  console.table(table)

  markdownBody.push(table.map(parts => `|${parts.join('|')}|`).join('\n'))
}

const dir = join(__dirname, '../docs')
const dest = join(dir, 'compare-diff-only.md')

if (!existsSync(dir)) {
  mkdirSync(dir)
}
writeFileSync(dest, markdownBody.join('\n\n'))
