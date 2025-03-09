import fs from 'node:fs'

const ignoreFile = new URL('./.eslintignore', import.meta.url)
const content = fs.readFileSync(ignoreFile, 'utf8')

const ignores = content
  .split('\n')
  .filter((line) => line && !line.startsWith('#'))

export default [{name: 'fisker/ignores', ignores}]
