import global from './global.mjs'
// eslint-disable-next-line unicorn/import-index
import * as languages from './languages/index.mjs'
import languagesToOverrides from './utils/languages-to-overrides.mjs'

const config = {
  ...global,
  overrides: [...languagesToOverrides(languages)],
}

export default config
