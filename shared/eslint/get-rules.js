import {CLIEngine} from 'eslint'
import mem from 'mem'

import ruleDocuments from './rule-documents'
import ruleValue from './rule-value'

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    useEslintrc: false,
  })

  const {rules} = engine.getConfigForFile('example.js')
  const defs = engine.getRules()

  for (const id of Object.keys(rules)) {
    const value = ruleValue(rules[id])
    const documents = ruleDocuments(id, defs)
    let {url: link} = documents
    link = (link || '')
      .replace(
        /\/sindresorhus\/eslint-plugin-unicorn\/blob\/v(.*?)\//,
        '/sindresorhus/eslint-plugin-unicorn/blob/master/'
      )
      .replace(
        /\/benmosher\/eslint-plugin-import\/blob\/v(.*?)\//,
        '/benmosher/eslint-plugin-import/blob/master/'
      )

    rules[id] = {
      value,
      link,
      docs: documents,
    }
  }
  return rules
}

export default mem(getRules)
