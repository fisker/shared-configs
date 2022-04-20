# @fisker/prettier-config

> fisker's Shareable prettier Configuration

## Install

```sh
yarn add prettier @fisker/prettier-config --dev
```

## Usage

```js
module.exports = require('@fisker/prettier-config')
```

## Customize

```js
module.exports = require('@fisker/prettier-config').extend({
  trailingComma: 'none',
  overrides: [
    {
      files: '*.flow.js',
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
| trailingComma             | all    | Print trailing commas wherever possible when multi-line. |

### \*.css

| Option      | value | Description                                 |
| :---------- | :---- | :------------------------------------------ |
| parser      | css   | Which parser to use.                        |
| singleQuote | false | Use single quotes instead of double quotes. |

### \*.{gql,graphql}

| Option | value   | Description          |
| :----- | :------ | :------------------- |
| parser | graphql | Which parser to use. |

### \*.{htm,html}

| Option | value | Description          |
| :----- | :---- | :------------------- |
| parser | html  | Which parser to use. |

### \*.{cjs,js,jsx,mjs}

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

### \*.{markdown,md}

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

### \*.{cts,mts,ts,tsx}

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
