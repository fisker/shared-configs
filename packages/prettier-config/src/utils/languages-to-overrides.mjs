import languageToOverride from './language-to-override.mjs'
import getExtensions from '../../../../shared/file-extensions.mjs'

function toOverrides(languages) {
  return Object.keys(languages).map((language) =>
    languageToOverride({
      extensions: getExtensions(language),
      config: {
        parser: language,
        ...languages[language],
      },
    })
  )
}

export default toOverrides
