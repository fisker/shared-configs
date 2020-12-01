function toArray(array) {
  array = Array.isArray(array) ? array : String(array).split(',')
  return array.map((item) => item.trim()).filter(Boolean)
}

export default toArray
