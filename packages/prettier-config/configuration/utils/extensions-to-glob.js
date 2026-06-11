function toGlob(extensions) {
  return extensions.length > 1
    ? `*.{${extensions.toSorted().join(',')}}`
    : `*.${extensions}`
}

export default toGlob
