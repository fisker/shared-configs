import {existsSync, mkdirSync, writeFileSync} from 'node:fs'
import path from 'node:path'

function writeFile(file, content) {
  const directory = path.dirname(file)

  if (!existsSync(directory)) {
    mkdirSync(directory)
  }

  writeFileSync(file, content)
}

export default writeFile
