import getExtensions from '../../../../shared/file-extensions.mjs'
import {ESLINT, PRETTIER} from '../commands.js'

const config = {
  extensions: getExtensions('javascript'),
  commands: [ESLINT, PRETTIER],
}

export default config
