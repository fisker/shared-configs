const mem = require('mem')

const numericType = ['off', 'warn', 'error']

function parseRuleValue(value) {
  if (Array.isArray(value)) {
    value = value[0]
  }

  return numericType[value] || value
}

export default mem(parseRuleValue)
