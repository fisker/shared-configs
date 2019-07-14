import writePrettierFile from 'write-prettier-file'
import prettierFormat from 'prettier-format'
import isUndefined from './is-undefined'
import readFile from './read-file'
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

  if (write) {
    return writePrettierFile(file, content, options)
  }

  return prettierFormat(content, {
    filePath: file,
    ...options,
  })
}

export default prettierFile
