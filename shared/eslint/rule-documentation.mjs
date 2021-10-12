import mem from 'mem'
import createEsmUtils from 'esm-utils'
import parseRuleId from './parse-rule-id.mjs'

const {require} = createEsmUtils(import.meta)

function loadRuleDefinition(id) {
  const {prefix, rule} = parseRuleId(id)
  switch (prefix) {
    case '': {
      return require('eslint/use-at-your-own-risk').builtinRules.get(rule)
    }
    case 'unicorn':
    case 'import':
    case 'node':
    case 'prettier':
    case 'vue':
    case 'promise':
    case 'eslint-comments': {
      return require(`eslint-plugin-${prefix}`).rules[rule]
    }
    default:
    // No default
  }
}

function getRuleDocumentation(id) {
  const definition = loadRuleDefinition(id) || {}
  const {meta = {}} = definition
  const {docs: documentation = {}} = meta
  return documentation
}

export default mem(getRuleDocumentation, {cacheKey: (ruleId) => ruleId})
