import getExtensions from './file-extensions.js'
import languageToOverride from './language-to-override.js'

function toOverrides(languages) {
  return Object.entries(languages).map(([language, settings]) =>
    languageToOverride({
      extensions: getExtensions(language),
      config: {
        parser: language,
        ...settings,
      },
    }),
  )
}

export default toOverrides
