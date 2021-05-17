import {ESLINT} from '../commands'
import getExtensions from '../../../../shared/file-extensions.mjs'

const config = {
  extensions: getExtensions('javascript'),
  commands: ESLINT,
}

export default config
