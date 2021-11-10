import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import test from 'ava'
import ESLint from 'eslint'

const dirname = path.dirname(url.fileURLToPath(import.meta.url))
const fixture = path.join.bind(path, dirname, 'fixtures')

const eslint = new ESLint.ESLint({
  ignore: false,
  useEslintrc: false,
  overrideConfigFile: path.join(dirname, '../index.js'),
})

async function lintResult(file) {
  const results = await eslint.lintFiles([fixture(file)])

  return results.map(
    ({filePath, usedDeprecatedRules, source, ...result}) => result,
  )
}

const files = fs.readdirSync(path.join(dirname, 'fixtures'))

for (const file of files) {
  test(file, async (t) => {
    t.snapshot(await lintResult(file))
  })
}

// test('configs', async (t) => {
//   const eslint = new ESLint.ESLint({
//     ignore: false,
//     useEslintrc: false,
//     overrideConfigFile: path.join(dirname, '../index.js'),
//   })

//   const configs = await eslint.calculateConfigForFile('./example.js')
//   delete configs.parser
//   t.snapshot(configs)
// })
