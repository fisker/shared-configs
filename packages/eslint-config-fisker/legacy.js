module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/legacy.js',

    // prettier
    './configs/prettier/prettier.js',

    // legacy
    './configs/legacy/legacy.js',
  ].map(require.resolve),
}
