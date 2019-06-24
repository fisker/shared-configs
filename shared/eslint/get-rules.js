import {join} from 'path'
import {CLIEngine} from 'eslint'
import mem from 'mem'

import ruleDocuments from './rule-documents'
import ruleValue from './rule-value'

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  })
  engine.executeOnText('', 'example.js')

  const {rules} = engine.getConfigForFile('')
  const defs = engine.getRules()

  for (const id of Object.keys(rules)) {
    const value = ruleValue(rules[id])
    const documents = ruleDocuments(id, defs)
    const {url: link} = documents

    rules[id] = {
      value,
      link,
      docs: documents,
    }
  }
  return rules
}

export default mem(getRules)
