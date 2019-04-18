import languageToOverride from './language-to-override'

function toOverrides(languages) {
  return Object.keys(languages).map(language =>
    languageToOverride({
      parser: language,
      extensions: language,
      ...languages[language],
    })
  )
}

export default toOverrides
