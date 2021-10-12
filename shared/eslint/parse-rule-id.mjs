import mem from 'mem'

function parseRuleId(id) {
  const array = id.split('/')

  const [prefix, ...ruleParts] = array.length < 2 ? ['', ...array] : array

  const rule = ruleParts.join('/')
  return {
    prefix,
    rule,
    id,
  }
}

export default mem(parseRuleId)
