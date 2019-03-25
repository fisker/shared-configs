import {dirname} from 'path'
import {mkdirSync, writeFileSync, existsSync} from 'fs'

function writeFile(file, content) {
  const dir = dirname(file)

  if (!existsSync(dir)) {
    mkdirSync(dir)
  }

  writeFileSync(file, content)
}

export default writeFile
