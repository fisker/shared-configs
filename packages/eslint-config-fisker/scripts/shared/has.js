const {hasOwnProperty} = Object.prototype

function has(obj, key) {
  return obj !== null && hasOwnProperty.call(obj, key)
}

export default has
