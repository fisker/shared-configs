module.exports = {
  extends: [
    // basic
    './index.js',

    // jest
    './configs/jest/jest.js',
  ].map(require.resolve),
}
