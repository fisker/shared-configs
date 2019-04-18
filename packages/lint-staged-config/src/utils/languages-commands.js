import toArray from './to-array'

function parseCommands(languages) {
  return Object.keys(languages)
    .map(language => {
      const {extensions = language, commands = []} = languages[language]
      return {
        extensions: toArray(extensions),
        commands: toArray(commands),
      }
    })
    .filter(({commands, extensions}) => commands.length && extensions.length)
}

export default parseCommands
