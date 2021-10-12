import {ESLint} from 'eslint'
import mem from 'mem'

import ruleDocumentation from './rule-documentation.mjs'
import ruleValue from './rule-value.mjs'

async function getRules(config) {
  const engine = new ESLint({
    baseConfig: config,
    cache: false,
    useEslintrc: false,
  })

  const {rules} = await engine.calculateConfigForFile('example.js')

  for (const [id, settings] of Object.entries(rules)) {
    const value = ruleValue(settings)

    const documentation = ruleDocumentation(id)
    let {url: link} = documentation
    link = (link || '')
      .replace(
        /\/sindresorhus\/eslint-plugin-unicorn\/blob\/v.*?\//u,
        '/sindresorhus/eslint-plugin-unicorn/blob/main/'
      )
      .replace(
        /\/import-js\/eslint-plugin-import\/blob\/v.*?\//u,
        '/import-js/eslint-plugin-import/blob/main/'
      )

    rules[id] = {
      value,
      link,
      documentation,
    }
  }
  return rules
}

export default mem(getRules)
