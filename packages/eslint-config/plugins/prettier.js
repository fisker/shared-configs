import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintConfigPrettier} = await importPreferLocal(
  'eslint-config-prettier',
)

export default [eslintConfigPrettier]
