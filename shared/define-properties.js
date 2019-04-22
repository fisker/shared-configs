import defineProperty from './define-property'

function defineProperties(object, properties, options = {}) {
  const keys = Object.keys(properties)

  for (const key of keys) {
    defineProperty(object, key, properties[key], options)
  }

  return object
}

export default defineProperties
