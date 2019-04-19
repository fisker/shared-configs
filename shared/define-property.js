function defineProperty(
  object,
  key,
  value,
  {enumerable = true, writable = true, configurable = true} = {}
) {
  return Object.defineProperty(object, key, {
    enumerable,
    writable,
    configurable,
    value,
  })
}

export default defineProperty
