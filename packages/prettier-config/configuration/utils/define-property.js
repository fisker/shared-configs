const defaults = {enumerable: true, writable: true, configurable: true}

function defineProperty(object, key, value, options = {}) {
  return Object.defineProperty(object, key, {
    ...defaults,
    value,
    ...options,
  })
}

export default defineProperty
