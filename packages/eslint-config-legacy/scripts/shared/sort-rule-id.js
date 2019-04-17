import mem from 'mem'
import parseRuleId from './parse-rule-id'

function sortRuleId(a, b) {
  const {prefix: aPrefix, rule: aRule} = parseRuleId(a)
  const {prefix: bPrefix, rule: bRule} = parseRuleId(b)
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

export default mem(sortRuleId)
