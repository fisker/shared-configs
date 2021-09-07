import {CLIEngine} from 'eslint'
import mem from 'mem'

import ruleDocuments from './rule-documents.mjs'
import ruleValue from './rule-value.mjs'

function getRules(config) {
  const engine = new CLIEngine({
    baseConfig: config,
    cache: false,
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
        '/sindresorhus/eslint-plugin-unicorn/blob/main/'
      )
      .replace(
        /\/import-js\/eslint-plugin-import\/blob\/v(.*?)\//,
        '/import-js/eslint-plugin-import/blob/main/'
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
