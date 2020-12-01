import {ESLINT} from '../commands'
import getExtensions from '../../../../shared/file-extensions.mjs'

export default {
  extensions: getExtensions('javascript'),
  commands: ESLINT,
}
