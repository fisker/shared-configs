module.exports = {
  extends: [
    // airbnb
    './configs/airbnb/airbnb-legacy.js',

    // promise
    './configs/promise/promise.js',

    // unicorn
    './configs/unicorn/unicorn-legacy.js',

    // eslint-comments
    './configs/eslint-comments/eslint-comments.js',

    // es
    './configs/es/es-legacy.js',

    // html
    './configs/html/html.js',

    // prettier
    './configs/prettier/prettier.js',

    // own rules
    './configs/own/own-legacy.js',
  ].map(require.resolve),
}
