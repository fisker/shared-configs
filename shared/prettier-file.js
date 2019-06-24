import writePrettierFile from 'write-prettier-file'
import isUndefined from './is-undefined'
import readFile from './read-file'
import writeFile from './write-file'
import identity from './identity'

function prettierFile({
  file,
  content,
  options = {},
  write = true,
  process = identity,
}) {
  if (isUndefined(content)) {
    content = readFile(file)
  }

  content = process(content)

  const formatted = writePrettierFile.sync(file, content, {
    ...options,
    write: false,
  })

  if (write) {
    writeFile(file, formatted)
  }

  return formatted
}

export default prettierFile
