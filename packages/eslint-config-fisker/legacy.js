module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb-legacy.js',

    // promise
    './configs/promise/promise.js',

    // unicorn
    './configs/unicorn/unicorn-legacy.js',

    // prettier
    './configs/prettier/prettier.js',

    // legacy
    './configs/legacy/legacy.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
