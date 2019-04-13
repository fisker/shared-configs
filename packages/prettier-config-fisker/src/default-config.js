import global from './global'
// eslint-disable-next-line unicorn/import-index
import * as languages from './languages/index'
import languagesToOverrides from './utils/languages-to-overrides'

const config = {
  ...global,
  overrides: [...languagesToOverrides(languages)],
}

export default config
