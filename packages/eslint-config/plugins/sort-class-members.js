import {importPreferLocal} from '../utilities/utilities.js'

const {default: eslintPluginSortClassMembers} = await importPreferLocal(
  'eslint-plugin-sort-class-members',
)
export default [eslintPluginSortClassMembers.configs['flat/recommended']]
