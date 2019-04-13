import extensionsToArray from './extensions-to-array'

function toGlob(extensions) {
  extensions = extensionsToArray(extensions)

  return extensions.length > 1
    ? `*.{${extensions.join(',')}}`
    : `*.${extensions}`
}

export default toGlob
