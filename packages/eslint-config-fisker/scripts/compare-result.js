const {CLIEngine} = require('eslint')
const mem = require('mem')

const getRuleLink = mem(
  function getRuleLink(ruleId, rule = {}) {
    const {meta = {}} = rule
    const {docs = {}} = meta
    const {url = ''} = docs

    return url
  },
  {
    cacheKey(ruleId) {
      return ruleId
    },
  }
)

const parseRuleValue = mem(function parseRuleValue(value) {
  if (Array.isArray(value)) {
    value = value[0]
  }

  if (typeof value === 'number') {
    return ['off', 'warn', 'error'][value]
  }

  return value
})

const getRules = mem(function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  })

  const {rules} = engine.config.baseConfig
  const ruleSets = engine.getRules()

  for (const ruleId of Object.keys(rules)) {
    const value = parseRuleValue(rules[ruleId])
    const link = getRuleLink(ruleId, ruleSets.get(ruleId))

    rules[ruleId] = {
      value,
      link,
    }
  }
  return rules
})

const splitRuleId = mem(function splitRuleId(ruleId) {
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
})

const sortRuleId = mem(function sortRuleId(a, b) {
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
})

function getResult(compare) {
  const {local, foreign, filter} = compare

  const names = [local.name, foreign.name]

  const localRules = getRules(local.config)
  const foreignRules = getRules(foreign.config)

  const data = [
    ...new Set([...Object.keys(localRules), ...Object.keys(foreignRules)]),
  ]
    .sort(sortRuleId)
    .filter(ruleId => filter(ruleId, localRules, foreignRules))
    .map(ruleId => {
      const local = localRules[ruleId] || {}
      const foreign = foreignRules[ruleId] || {}

      return {
        name: ruleId,
        link: local.link || foreign.link,
        local: local.value,
        foreign: foreign.value,
      }
    })

  return {
    names,
    data,
  }
}

function getResults(compareData) {
  return compareData.map(getResult)
}

function toMarkdown(result) {
  const body = result.map(({names, data}) => {
    const [localName, foreignName] = names
    const table = [
      ['rule', localName, foreignName],
      [':-', ':-:', ':-:'],
      ...data.map(({name, link, local, foreign}) => [
        link ? `[${name}](${link})` : name,
        local,
        foreign,
      ]),
    ]
      .map(parts => ['', ...parts, ''].join('|'))
      .join('\n')

    return `## ${localName} VS ${foreignName}\n\n${table}`
  })

  return ['# compare', ...body].join('\n\n')
}

module.exports = {
  getResults,
  toMarkdown,
}
