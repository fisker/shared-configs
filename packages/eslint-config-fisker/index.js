module.exports = {
  plugins: ['promise'],
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // promise
    './configs/promise/promise.js',

    // unicorn
    './configs/unicorn/unicorn.js',

    // prettier
    './configs/prettier/prettier.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
