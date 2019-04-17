function isEqualRuleValue({id}, localRules, foreignRules) {
  return (
    localRules[id] &&
    foreignRules[id] &&
    localRules[id].value === foreignRules[id].value
  )
}

export default isEqualRuleValue
