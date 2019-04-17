import {writeFileSync, readFileSync} from 'fs'
import {join} from 'path'
import prettier from 'prettier'
import isUndefined from '../src/utils/is-undefined'
import options from '../src/default-config'

const prettierOptions = prettier.getSupportInfo().options

const OPTIONS_START_MARK = '<!-- options start -->'
const OPTIONS_END_MARK = '<!-- options end -->'

const tableColumns = ['Option', 'value', 'Description']
const tableAlign = [':-', ':-', ':-']

function rulesToTable(rules) {
  return [
    tableColumns.join(' | '),
    tableAlign.join(' | '),
    ...rules.map(({name, value, description}) =>
      [name, value, description].join(' | ')
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

const readmeFile = join(__dirname, `../readme.md`)
const readme = readFileSync(readmeFile, 'utf8').replace(
  new RegExp(`${OPTIONS_START_MARK}[\\s\\S]*?${OPTIONS_END_MARK}`, 'm'),
  content
)

writeFileSync(readmeFile, readme)
