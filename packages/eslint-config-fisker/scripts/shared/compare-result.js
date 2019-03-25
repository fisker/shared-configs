import getRules from './get-rules'
import sortRuleId from './sort-rule-id'
import parseRuleId from './parse-rule-id'

function getResult(compare) {
  const {local, foreign, filter} = compare

  const names = [local.name, foreign.name]

  const localRules = getRules(local.config)
  const foreignRules = getRules(foreign.config)

  const data = [
    ...new Set([...Object.keys(localRules), ...Object.keys(foreignRules)]),
  ]
    .sort(sortRuleId)
    .filter(ruleId => {
      return filter(parseRuleId(ruleId), localRules, foreignRules)
    })
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

export default getResult
