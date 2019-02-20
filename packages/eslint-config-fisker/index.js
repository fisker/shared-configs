module.exports = {
  plugins: ['promise'],
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // prettier
    './configs/prettier/prettier.js',

    // promise
    './configs/promise/promise.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
