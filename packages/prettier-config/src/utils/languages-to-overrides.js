import languageToOverride from './language-to-override'
import getExtensions from '../../../../shared/file-extensions'

function toOverrides(languages) {
  return Object.keys(languages).map(language =>
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
