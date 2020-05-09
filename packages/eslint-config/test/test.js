import test from 'ava'
import fs from 'fs'
import path from 'path'
import {ESLint} from 'eslint'

const fixture = path.join.bind(path, __dirname, 'fixtures')

async function lintResult(file) {
  const eslint = new ESLint({
    baseConfig: {
      extends: [require.resolve('..')],
    },
    useEslintrc: false,
  })

  const results = await eslint.lintFiles([fixture(file)])

  return results.map(
    ({filePath, usedDeprecatedRules, source, ...result}) => result
  )
}

// eslint-disable-next-line handle-callback-err
fs.readdir(path.join(__dirname, 'fixtures'), (error, files) => {
  for (const file of files) {
    test(file, async (t) => {
      t.snapshot(await lintResult(file))
    })
  }
})
