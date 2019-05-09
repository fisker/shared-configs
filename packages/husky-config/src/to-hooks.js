function tasks(array) {
  return array.join(' && ')
}

function toHooks(hooks) {
  const keys = Object.keys(hooks)
  const parsed = {}

  for (const hook of keys) {
    const commands = hooks[hook]
    parsed[hook] = Array.isArray(commands) ? tasks(commands) : commands
  }

  return parsed
}

export default toHooks
