import {ESLINT} from '../commands'
import getExtensions from '../../../../shared/file-extensions'

export default {
  extensions: getExtensions('javascript'),
  commands: ESLINT,
}
