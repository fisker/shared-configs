import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import test from 'ava'
import ESLint from 'eslint'

const dirname = path.dirname(url.fileURLToPath(import.meta.url))
// eslint-disable-next-line unicorn/prefer-prototype-methods
const fixture = path.join.bind(path, dirname, 'fixtures')

const eslint = new ESLint.ESLint({
  ignore: false,
  useEslintrc: false,
  overrideConfigFile: path.join(dirname, '../index.js'),
})

async function lintResult(file) {
  const results = await eslint.lintFiles([fixture(file)])

  return results.map(
    ({filePath, usedDeprecatedRules, source, ...result}) => result
  )
}

// eslint-disable-next-line handle-callback-err
fs.readdir(path.join(dirname, 'fixtures'), (error, files) => {
  for (const file of files) {
    test(file, async (t) => {
      t.snapshot(await lintResult(file))
    })
  }
})
