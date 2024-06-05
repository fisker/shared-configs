import {importPreferLocal, importFile} from '../utilities/utilities.js'
import rulesBestPractices from './best-practices.js'
import rulesErrors from './errors.js'
import rulesEs6 from './es6.js'
import rulesNode from './node.js'
import rulesStrict from './strict.js'
import rulesStyle from './style.js'
import rulesVariables from './variables.js'

const {default: eslintConfigAirbnbBase} = await importPreferLocal(
  'eslint-config-airbnb-base',
)

const modules = await Promise.all(
  eslintConfigAirbnbBase.extends
    .filter((file) => !file.endsWith('imports.js'))
    .map((file) => importFile(file)),
)
const eslintConfigAirbnbBaseRules = Object.fromEntries(
  modules.flatMap((module) => Object.entries(module.default.rules)),
)

export default [
  {
    rules: {
      ...eslintConfigAirbnbBaseRules,
      ...rulesBestPractices,
      ...rulesErrors,
      ...rulesEs6,
      ...rulesNode,
      ...rulesStrict,
      ...rulesStyle,
      ...rulesVariables,
    },
  },
]
