import test from 'ava'
import fs from 'fs'
import path from 'path'
import ESLint from 'eslint'

const {CLIEngine} = ESLint
const fixture = path.join.bind(path, __dirname, 'fixtures')

function getESLintReport(file) {
  const cli = new CLIEngine({
    baseConfig: {
      extends: [require.resolve('..')],
    },
  })
  const report = cli.executeOnFiles([fixture(file)])
  report.results = report.results.map(result => {
    delete result.filePath
    return result
  })
  return report
}

// eslint-disable-next-line handle-callback-err
fs.readdir(path.join(__dirname, 'fixtures'), (error, files) => {
  for (const file of files) {
    test(file, t => {
      const report = getESLintReport(file)
      t.snapshot(report)
    })
  }
})
