import toCommands from './to-commands'

function tasks(array) {
  return array.join(' && ')
}

function toHooks(options = {}) {
  options = toCommands(options)

  const keys = Object.keys(options).sort()
  const parsed = {}

  for (const hook of keys) {
    parsed[hook] = tasks(options[hook])
  }

  return parsed
}

export default toHooks
