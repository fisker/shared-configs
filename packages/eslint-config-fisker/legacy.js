module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/legacy.js',

    // prettier
    './configs/prettier/prettier.js',

    // promise
    './configs/promise/promise.js',

    // unicorn
    './configs/unicorn/unicorn-legacy.js',

    // legacy
    './configs/legacy/legacy.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
