import mem from 'mem'

function parseRuleId(id) {
  const array = id.split('/')

  const prefix = array.length > 1 ? array.shift() : ''
  const rule = array.join('')

  return {
    prefix,
    rule,
    id,
  }
}

export default mem(parseRuleId)
