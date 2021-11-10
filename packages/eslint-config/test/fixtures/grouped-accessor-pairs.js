const foo = {
  get a() {
    return this.val
  },
  b: 1,
  set a(value) {
    this.val = value
  },
}

export default foo
