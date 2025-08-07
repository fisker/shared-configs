import global from './global.js'
import * as languages from './languages/index.js'
import languagesToOverrides from './utils/languages-to-overrides.js'

const config = {
  ...global,
  overrides: [...languagesToOverrides(languages)],
}

export default config
