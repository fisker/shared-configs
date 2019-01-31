// options https://prettier.io/docs/en/options.html
// Configuration File https://prettier.io/docs/en/configuration.html

module.exports = {
  // options for all files
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  htmlWhitespaceSensitivity: 'ignore',

  // overrides
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.{md,markdown}',
      options: {
        parser: 'markdown',
      },
    },
  ],
}
