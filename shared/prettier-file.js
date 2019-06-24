import writePrettierFile from 'write-prettier-file'
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

  return writePrettierFile.sync(file, content, {
    ...options,
    write,
  })
}

export default prettierFile
