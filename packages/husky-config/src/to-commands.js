function spit(commands) {
  return commands.split('&&')
}

function toCommands(options = {}) {
  const keys = Object.keys(options)
  const parsed = {}

  for (const hook of keys) {
    const hooks = options[hook] || []
    const commands = (Array.isArray(hooks) ? hooks : spit(hooks))
      .map((command) => command.trim())
      .filter(Boolean)

    if (commands.length !== 0) {
      parsed[hook] = commands
    }
  }

  return parsed
}

export default toCommands
