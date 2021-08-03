import {SORT_PACKAGE_JSON} from './commands.js'
import * as languages from './languages/index.js'
import mergeCommands from './utils/merge-commands.js'
import parseCommands from './utils/languages-commands.js'
import extensionsToGlob from './utils/extensions-to-glob.js'

module.exports = mergeCommands(parseCommands(languages)).reduce(
  (config, {extensions, commands}) => ({
    ...config,
    [extensionsToGlob(extensions)]: commands,
  }),
  {
    'package.json': [SORT_PACKAGE_JSON],
  }
)
