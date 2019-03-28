import {CLIEngine} from 'eslint'
import mem from 'mem'

import ruleDocuments from './rule-documents'
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
    const documents = ruleDocuments(ruleId, defs)
    const {url: link} = documents

    rules[ruleId] = {
      value,
      link,
      documents,
    }
  }
  return rules
}

export default mem(getRules)
