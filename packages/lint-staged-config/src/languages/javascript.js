import {ESLINT, PRETTIER} from '../commands.js'
import getExtensions from '../../../../shared/file-extensions.mjs'

const config = {
  extensions: getExtensions('javascript'),
  commands: [ESLINT, PRETTIER],
}

export default config
