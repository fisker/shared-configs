import {ESLINT} from '../commands.js'
import getExtensions from '../../../../shared/file-extensions.mjs'

const config = {
  extensions: getExtensions('javascript'),
  commands: [ESLINT],
}

export default config
