# prettier-config-fisker

> fisker's Shareable prettier Configuration

## Install

```sh
yarn add prettier-config-fisker --dev
```

## Usage

```js
module.exports = require('prettier-config-fisker')
```

## Customize

```js
module.exports = require('prettier-config-fisker').customize({
  semi: false,
  overrides: [
    {
      file: '*.flow.js',
      options: {
        parser: 'flow',
      },
    },
  ],
})
```

## Options

<!-- options start -->

<!-- AUTO GENERATED CONTENT, DON'T EDIT -->

### Global

| Option                    | value  | Description                                              |
| :------------------------ | :----- | :------------------------------------------------------- |
| bracketSpacing            | false  | Print spaces between brackets.                           |
| htmlWhitespaceSensitivity | ignore | How to handle whitespaces in HTML.                       |
| semi                      | false  | Print semicolons.                                        |
| singleQuote               | true   | Use single quotes instead of double quotes.              |
| trailingComma             | es5    | Print trailing commas wherever possible when multi-line. |

### \*.css

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | css   | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

### \*.{gql,graphql}

| Option | value   | Description          |
| :----- | :------ | :------------------- |
| parser | graphql | Which parser to use. |

### \*.{html,htm}

| Option | value | Description          |
| :----- | :---- | :------------------- |
| parser | html  | Which parser to use. |

### \*.{js,jsx,mjs}

| Option | value | Description          |
| :----- | :---- | :------------------- |
| parser | babel | Which parser to use. |

### \*.json

| Option      | value          | Description                                 |
| :---------- | :------------- | :------------------------------------------ |
| parser      | json-stringify | Which parser to use.                        |
| singleQuote | false          | Use single quotes instead of double quotes. |

### \*.json5

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | json5 | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

### \*.less

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | less  | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

### \*.{md,markdown}

| Option | value    | Description          |
| :----- | :------- | :------------------- |
| parser | markdown | Which parser to use. |

### \*.mdx

| Option | value | Description          |
| :----- | :---- | :------------------- |
| parser | mdx   | Which parser to use. |

### \*.scss

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | scss  | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

### \*.{ts,tsx}

| Option | value      | Description          |
| :----- | :--------- | :------------------- |
| parser | typescript | Which parser to use. |

### \*.vue

| Option | value | Description          |
| :----- | :---- | :------------------- |
| parser | vue   | Which parser to use. |

### \*.{yaml,yml}

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | yaml  | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

<!-- options end -->

## License

MIT © [fisker Cheung](https://www.fiskercheung.com/)
