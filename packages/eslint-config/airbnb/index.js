import eslintConfigAirbnbBaseRulesBestPractices from 'eslint-config-airbnb-base/rules/best-practices'
import eslintConfigAirbnbBaseRulesErrors from 'eslint-config-airbnb-base/rules/errors'
import eslintConfigAirbnbBaseRulesEs6 from 'eslint-config-airbnb-base/rules/es6'
import eslintConfigAirbnbBaseRulesNode from 'eslint-config-airbnb-base/rules/node'
import eslintConfigAirbnbBaseRulesStrict from 'eslint-config-airbnb-base/rules/strict'
import eslintConfigAirbnbBaseRulesStyle from 'eslint-config-airbnb-base/rules/style'
import eslintConfigAirbnbBaseRulesVariables from 'eslint-config-airbnb-base/rules/variables'
import rulesBestPractices from './best-practices.js'
import rulesErrors from './errors.js'
import rulesEs6 from './es6.js'
import rulesNode from './node.js'
import rulesStrict from './strict.js'
import rulesStyle from './style.js'
import rulesVariables from './variables.js'

const eslintConfigAirbnbBaseRules = {
  ...eslintConfigAirbnbBaseRulesBestPractices.rules,
  ...eslintConfigAirbnbBaseRulesErrors.rules,
  ...eslintConfigAirbnbBaseRulesEs6.rules,
  ...eslintConfigAirbnbBaseRulesNode.rules,
  ...eslintConfigAirbnbBaseRulesStrict.rules,
  ...eslintConfigAirbnbBaseRulesStyle.rules,
  ...eslintConfigAirbnbBaseRulesVariables.rules,
}

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
