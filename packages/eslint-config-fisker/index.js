module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // prettier
    './configs/prettier/prettier.js',

    // own rules
    './configs/own/own.js',
  ].map(require.resolve),
}
