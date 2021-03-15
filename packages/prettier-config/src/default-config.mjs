import global from './global.mjs'
import * as languages from './languages/index.mjs'
import languagesToOverrides from './utils/languages-to-overrides.mjs'

const config = {
  ...global,
  overrides: [...languagesToOverrides(languages)],
}

export default config
