import parseRuleId from './parse-rule-id.mjs'

const compareString = (a, b) => a.trim().localeCompare(b.trim())

const sortRuleId = (a, b) => {
  const {prefix: aPrefix, rule: aRule} = parseRuleId(a)
  const {prefix: bPrefix, rule: bRule} = parseRuleId(b)

  return compareString(aPrefix, bPrefix) || compareString(aRule, bRule)
}

export default sortRuleId
