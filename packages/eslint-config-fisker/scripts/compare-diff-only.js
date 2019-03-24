const {join} = require('path')
const {mkdirSync, writeFileSync, existsSync} = require('fs')
const {getResults, toMarkdown} = require('./compare-result')

function has(obj, key) {
  return obj && Object.prototype.hasOwnProperty.call(obj, key)
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
      if (
        localRules[ruleId] &&
        foreignRules[ruleId] &&
        localRules[ruleId].value === foreignRules[ruleId].value
      ) {
        return false
      }
      const {prefix} = splitRuleId(ruleId)
      return !prefix
    },
    local: {
      name: 'fisker',
      config: {
        extends: ['../index.js'].map(require.resolve),
      },
    },
    foreign: {
      name: 'airbnb (+ whitespace)',
      config: {
        extends: [
          'eslint-config-airbnb-base',
          'eslint-config-airbnb-base/whitespace',
        ].map(require.resolve),
      },
    },
  },
  {
    filter(ruleId, localRules, foreignRules) {
      if (
        localRules[ruleId] &&
        foreignRules[ruleId] &&
        localRules[ruleId].value === foreignRules[ruleId].value
      ) {
        return false
      }
      const {prefix} = splitRuleId(ruleId)
      return (
        (prefix === 'prettier' || prefix === 'unicorn' || !prefix) &&
        has(foreignRules, ruleId)
      )
    },
    local: {
      name: 'fisker',
      config: {
        extends: ['../index.js'].map(require.resolve),
      },
    },
    foreign: {
      name: 'prettier (+ unicorn)',
      config: {
        extends: [
          'eslint-config-prettier',
          'eslint-config-prettier/unicorn',
        ].map(require.resolve),
      },
    },
  },
]

const results = getResults(compares)
const markdown = toMarkdown(results)

const dir = join(__dirname, '../docs')
const dest = join(dir, 'compare-diff-only.md')

if (!existsSync(dir)) {
  mkdirSync(dir)
}
writeFileSync(dest, markdown)
