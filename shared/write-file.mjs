import path from 'node:path'
import {mkdirSync, writeFileSync, existsSync} from 'node:fs'

function writeFile(file, content) {
  const directory = path.dirname(file)

  if (!existsSync(directory)) {
    mkdirSync(directory)
  }

  writeFileSync(file, content)
}

export default writeFile
