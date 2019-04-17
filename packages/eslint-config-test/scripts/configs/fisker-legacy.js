import {join} from 'path'

export default {
  name: 'fisker/legacy',
  config: {
    extends: [join(__dirname, '../../legacy.js')],
  },
}
