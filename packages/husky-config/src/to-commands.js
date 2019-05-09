function spit(commands) {
  return commands.split('&&').map(command => command.trim())
}

function toCommands(hooks) {
  const keys = Object.keys(hooks)
  const parsed = {}

  for (const hook of keys) {
    const commands = hooks[hook]
    parsed[hook] = Array.isArray(commands) ? commands : spit(commands)
  }

  return parsed
}

export default toCommands
