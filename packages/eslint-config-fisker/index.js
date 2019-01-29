module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb.js',

    // prettier
    './configs/prettier/prettier.js',
  ].map(require.resolve),
}
