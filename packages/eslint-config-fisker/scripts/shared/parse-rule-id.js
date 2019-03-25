import mem from 'mem'

function parseRuleId(id) {
  const [prefix, rule] = id.split('/')

  if (!rule) {
    return {
      prefix: '',
      rule: prefix,
      id,
    }
  }

  return {
    prefix,
    rule,
    id,
  }
}

export default mem(parseRuleId)
