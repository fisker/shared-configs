import writePrettierFile from 'write-prettier-file'
import prettierFormat from 'prettier-format'
import isUndefined from './is-undefined.mjs'
import readFile from './read-file.mjs'
import identity from './identity.mjs'

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
