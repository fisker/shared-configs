import {SORT_PACKAGE_JSON} from './commands'
import * as languages from './languages/index'
import mergeCommands from './utils/merge-commands'
import parseCommands from './utils/languages-commands'
import extensionsToGlob from './utils/extensions-to-glob'

module.exports = mergeCommands(parseCommands(languages)).reduce(
  (config, {extensions, commands}) => ({
    ...config,
    [extensionsToGlob(extensions)]: commands,
  }),
  {
    'package.json': [SORT_PACKAGE_JSON],
  }
)
