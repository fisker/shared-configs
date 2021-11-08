function isSameCommands(commands1, commands2) {
  return commands1.join(',') === commands2.join(',')
}

function mergeCommands(commands) {
  return commands.reduce((allCommands, current) => {
    const {extensions, commands: currentCommands} = current
    const result = allCommands.find(({commands}) =>
      isSameCommands(commands, currentCommands),
    )

    if (result) {
      result.extensions = [...result.extensions, ...extensions]
      return allCommands
    }
    return [...allCommands, current]
  }, [])
}

export default mergeCommands
