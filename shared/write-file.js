import path from 'path'
import {mkdirSync, writeFileSync, existsSync} from 'fs'

function writeFile(file, content) {
  const directory = path.dirname(file)

  if (!existsSync(directory)) {
    mkdirSync(directory)
  }

  writeFileSync(file, content)
}

export default writeFile
