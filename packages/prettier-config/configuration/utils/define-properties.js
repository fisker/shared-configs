import defineProperty from './define-property.js'

function defineProperties(object, properties, options = {}) {
  for (const [key, value] of Object.entries(properties)) {
    defineProperty(object, key, value, options)
  }

  return object
}

export default defineProperties
