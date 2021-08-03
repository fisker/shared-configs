import toArray from './to-array.js'

function parseCommands(languages) {
  return Object.keys(languages)
    .map((language) => {
      const {extensions = language, commands = []} = languages[language]
      return {
        extensions: toArray(extensions),
        commands: toArray(commands),
      }
    })
    .filter(
      ({commands, extensions}) =>
        commands.length !== 0 && extensions.length !== 0
    )
}

export default parseCommands
