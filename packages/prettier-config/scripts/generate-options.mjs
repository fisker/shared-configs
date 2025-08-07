import path from 'node:path'
import url from 'node:url'
import prettier from 'prettier'
import isUndefined from '../../../shared/is-undefined.js'
import prettierFile from '../../../shared/prettier-file.js'
import options from '../src/default-config.js'

const dirname = path.dirname(url.fileURLToPath(import.meta.url))

const {options: prettierOptions} = await prettier.getSupportInfo()
prettierOptions.sort((optionA, optionB) =>
  optionA.name.localeCompare(optionB.name),
)

const OPTIONS_START_MARK = '<!-- options start -->'
const OPTIONS_END_MARK = '<!-- options end -->'

const tableColumns = ['Option', 'value', 'Description']
const tableAlign = [':-', ':-', ':-']

function rulesToTable(rules) {
  return [
    tableColumns.join(' | '),
    tableAlign.join(' | '),
    ...rules.map(({name, value, description}) =>
      [name, value, description].join(' | '),
    ),
  ].join('\n')
}

function getRules(options) {
  return prettierOptions
    .filter(({name}) => !isUndefined(options[name]))
    .map(({name, description}) => ({
      name,
      value: options[name],
      description,
    }))
}

const {overrides = []} = options

const languagesRules = overrides.map(({files, options}) => ({
  type: files,
  rules: getRules(options),
}))

const rules = [
  {
    type: 'Global',
    rules: getRules(options),
  },
  ...languagesRules,
]

const content = [
  OPTIONS_START_MARK,
  "<!-- AUTO GENERATED CONTENT, DON'T EDIT -->",
  ...rules.map(({type, rules}) => `### ${type}\n\n${rulesToTable(rules)}`),
  OPTIONS_END_MARK,
].join('\n\n')

const readmeFile = path.join(dirname, '../readme.md')

await prettierFile({
  file: readmeFile,
  process(readme) {
    return readme.replace(
      new RegExp(`${OPTIONS_START_MARK}.*?${OPTIONS_END_MARK}`, 'su'),
      content,
    )
  },
})
