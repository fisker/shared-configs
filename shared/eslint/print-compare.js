import {join} from 'path'
import getResult from './compare-result'
import printer from './markdown-printer'
import isEqualRuleValue from './is-equal-rule-value'
import prettierFile from '../prettier-file'

function getDiffOnlyFilter(filter) {
  return (...arguments_) => {
    return !isEqualRuleValue(...arguments_) && filter(...arguments_)
  }
}

function printCompareResult(destination_, compares, configs) {
  for (const {
    filter,
    file,
    local: localName,
    foreign: foreignName,
  } of compares) {
    console.log(`building: ${localName} with ${foreignName}`)

    const local = {
      name: localName,
      config: configs[localName],
    }
    const foreign = {
      name: foreignName,
      config: configs[foreignName],
    }

    const resultAll = getResult({filter, local, foreign})
    const resultDiff = getResult({
      filter: getDiffOnlyFilter(filter),
      local,
      foreign,
    })

    const content = [
      '<!-- AUTO GENERATED FILE, DO NOT EDIT -->',
      `# compare`,
      `> compare ${local.name} with ${foreign.name}`,
      `## difference only`,
      printer(resultDiff),
      `## all rules`,
      printer(resultAll),
    ].join('\n\n')

    const destination = join(destination_, `${file}.md`)

    prettierFile({
      file: destination,
      content,
    })

    console.log(`saved: ${destination}`)
  }
}

export default printCompareResult
