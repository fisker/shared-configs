import getExtensions from '../../../../shared/file-extensions.js'
import languageToOverride from './language-to-override.js'

function toOverrides(languages) {
  return Object.keys(languages).map((language) =>
    languageToOverride({
      extensions: getExtensions(language),
      config: {
        parser: language,
        ...languages[language],
      },
    }),
  )
}

export default toOverrides
