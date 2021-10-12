import mem from 'mem'
import createEsmUtils from 'esm-utils'
import parseRuleId from './parse-rule-id.mjs'

const {require} = createEsmUtils(import.meta)

function loadRuleDefinition(id) {
  const {prefix, rule} = parseRuleId(id)
  if (prefix === '') {
    return require('eslint/use-at-your-own-risk').builtinRules.get(rule)
  }

  if (prefix.charAt(0) === '@') {
    try {
      return require(`${prefix}/eslint-plugin`).rules[rule]
    } catch {}
  } else {
    try {
      return require(`eslint-plugin-${prefix}`).rules[rule]
    } catch {}
  }
}

function getRuleDocumentation(id) {
  const definition = loadRuleDefinition(id)
  return definition?.meta.docs ?? {}
}

export default mem(getRuleDocumentation, {cacheKey: (ruleId) => ruleId})
