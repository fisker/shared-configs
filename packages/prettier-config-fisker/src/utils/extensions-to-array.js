function toArray(extensions) {
  extensions = Array.isArray(extensions) ? extensions : extensions.split(',')
  return extensions.map(extension => extension.trim()).filter(Boolean)
}

export default toArray
