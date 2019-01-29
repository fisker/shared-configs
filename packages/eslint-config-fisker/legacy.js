module.exports = {
  extends: [
    // airbnb
    'eslint-config-airbnb-base/legacy',
    './rules/airbnb-override/best-practices.js',
    './rules/airbnb-override/errors.js',
    './rules/airbnb-override/node.js',
    './rules/airbnb-override/style.js',
    './rules/airbnb-override/variables.js',

    // prettier
    './rules/prettier/prettier.js',

    // legacy
    './rules/legacy/legacy.js',
  ].map(require.resolve),
}
