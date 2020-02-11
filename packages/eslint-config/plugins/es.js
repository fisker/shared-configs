module.exports = {
  plugins: ['es'],
  rules: {
    // Lookbehind assertions cannot be transpiled
    // https://github.com/babel/babel/issues/11086#issuecomment-581157679
    'es/no-regexp-lookbehind-assertions': 'error',
  },
}
