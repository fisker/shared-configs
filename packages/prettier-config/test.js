import test from 'ava'
import prettier from 'prettier'
import options from './src'

const prettierOptions = prettier.getSupportInfo().options
const {overrides = []} = options

function parseOptions(options) {
  const keys = Object.keys(options).filter(key => key !== 'overrides')
  return keys.map(key => ({
    name: key,
    value: options[key],
  }))
}

function validateOptions({name, value}) {
  const option = prettierOptions.find(({name: key}) => name === key)
  const {type, choices} = option
  if (type === 'boolean') {
    return typeof value === 'boolean'
  }
  if (type === 'choice') {
    const choice = choices.find(({value: option}) => value === option)
    return Boolean(choice)
  }
}

function flat(array) {
  return array.reduce(
    (all, current) => [
      ...all,
      ...(Array.isArray(current) ? current : [current]),
    ],

    []
  )
}

test('options', t => {
  const allOptions = flat([
    ...parseOptions(options),
    ...overrides.map(({options}) => parseOptions(options)),
  ])

  t.is(allOptions.every(validateOptions), true)
})
