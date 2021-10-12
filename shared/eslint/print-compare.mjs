import path from 'node:path'
import writePrettierFile from 'write-prettier-file'
import getResult from './compare-result.mjs'
import tablePrinter from './markdown-table-printer.mjs'
import listPrinter from './markdown-list-printer.mjs'
import isEqualRuleValue from './is-equal-rule-value.mjs'

function getDiffOnlyFilter(filter) {
  return (...arguments_) => {
    return !isEqualRuleValue(...arguments_) && filter(...arguments_)
  }
}

async function printCompareResult(destination_, compares, configs) {
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

    // eslint-disable-next-line no-await-in-loop
    const resultAll = await getResult({filter, local, foreign})
    // eslint-disable-next-line no-await-in-loop
    const resultDiff = await getResult({
      filter: getDiffOnlyFilter(filter),
      local,
      foreign,
    })

    const content = [
      '<!-- AUTO GENERATED FILE, DO NOT EDIT -->',
      '# compare',
      `> compare ${local.name} with ${foreign.name}`,
      '## difference only',
      listPrinter(resultDiff),
      tablePrinter(resultDiff),
      '## all rules',
      listPrinter(resultAll),
      tablePrinter(resultAll),
    ].join('\n\n')

    const destination = path.join(destination_, `${file}.md`)

    writePrettierFile(destination, content)

    console.log(`saved: ${destination}`)
  }
}

export default printCompareResult
