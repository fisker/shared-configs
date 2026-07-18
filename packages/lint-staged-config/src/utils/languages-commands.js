import toArray from './to-array.js'

function parseCommands(languages) {
  return Object.entries(languages)
    .map(([language, settings]) => {
      const {extensions = language, commands = []} = settings
      return {
        extensions: toArray(extensions),
        commands: toArray(commands),
      }
    })
    .filter(
      ({commands, extensions}) =>
        commands.length !== 0 && extensions.length !== 0,
    )
}

export default parseCommands
