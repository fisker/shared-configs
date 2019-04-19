function toGlob(extensions) {
  return extensions.length > 1
    ? `*.{${extensions.sort().join(',')}}`
    : `*.${extensions}`
}

export default toGlob
