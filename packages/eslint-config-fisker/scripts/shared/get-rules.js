import {CLIEngine} from 'eslint'
import mem from 'mem'

import ruleDocs from './rule-docs'
import ruleValue from './rule-value'

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  })

  const {rules} = engine.config.baseConfig
  const defs = engine.getRules()

  for (const ruleId of Object.keys(rules)) {
    const value = ruleValue(rules[ruleId])
    const docs = ruleDocs(ruleId, defs)
    const {url: link} = docs

    rules[ruleId] = {
      value,
      link,
      docs,
    }
  }
  return rules
}

export default mem(getRules)
