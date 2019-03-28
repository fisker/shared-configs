/*!
 * config file for `prettier`
 *
 * update: wget -O prettier.config.js https://git.io/fjJKh
 * document: https://prettier.io/docs/en/options.html
 */

// https://prettier.io/docs/en/options.html
const SUPPORTED_OPTIONS = [
  'printWidth',
  'tabWidth',
  'useTabs',
  'semi',
  'singleQuote',
  'jsxSingleQuote',
  'trailingComma',
  'bracketSpacing',
  'jsxBracketSameLine',
  'arrowParens',
  'rangeStart',
  'rangeEnd',
  'parser',
  'filepath',
  'requirePragma',
  'insertPragma',
  'proseWrap',
  'htmlWhitespaceSensitivity',
  'endOfLine',
]

// default config
const DEFAULT_CONFIG = {
  bracketSpacing: false,
  htmlWhitespaceSensitivity: 'ignore',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}

// config for lang
const LANG_CONFIG = {
  javascript: {
    extension: 'js,jsx,mjs',
    parser: 'babel',
    singleQuote: true,
  },
  typescript: {
    extension: 'ts,tsx',
    singleQuote: true,
  },
  html: {
    extension: 'html,htm',
    // effect js in html
    singleQuote: true,
  },
  markdown: {
    // more extension: mdown,mdwn,mkd,mkdn,mkdown
    extension: 'md,markdown',
    singleQuote: false,
  },
  yaml: {
    extension: 'yaml,yml',
    singleQuote: false,
  },
  graphql: {
    extension: 'gql,graphql',
  },
  css: {
    singleQuote: false,
  },
  scss: {
    singleQuote: false,
  },
  less: {
    singleQuote: false,
  },
  vue: {},
  json: {
    singleQuote: false,
  },
  json5: {
    singleQuote: true,
  },
  mdx: {},
}

// custom overrides
const CUSTOM_OVERRIDES = [
  // {
  //   files: 'your glob',
  //   options: {
  //     [option key]: [option value],
  //   }
  // },
]

// export

function toArray(x) {
  x = Array.isArray(x) ? x : x.split(',')
  return x.filter(Boolean).map(s => s.trim())
}

function isUndefined(x) {
  return typeof x === 'undefined'
}

function isNotDefault(config, option) {
  const configValue = config[option]
  const defaultValue = DEFAULT_CONFIG[option]

  return (
    !isUndefined(configValue) &&
    (isUndefined(defaultValue) || configValue !== defaultValue)
  )
}

function toOverrides(config) {
  const {lang} = config

  const extension = toArray(config.extension || lang)
  const parser = config.parser || lang

  const files =
    extension.length > 1 ? `*.{${extension.join(',')}}` : `*.${extension}`

  const options = {
    parser,
  }

  for (const option of SUPPORTED_OPTIONS) {
    if (isNotDefault(config, option)) {
      options[option] = config[option]
    }
  }

  return {
    files,
    options,
  }
}

function configParser({lang, config}) {
  if (Array.isArray(config)) {
    config = {
      extension: config,
    }
  }

  if (typeof config === 'string') {
    if (toArray(config).length === 1) {
      config = {
        parser: 'config',
      }
    } else {
      config = {
        extension: 'config',
      }
    }
  }

  return {
    ...config,
    lang,
  }
}

function langOverrides(config) {
  return Object.keys(config)
    .sort()
    .map(lang =>
      configParser({
        lang,
        config: config[lang],
      })
    )
    .map(toOverrides)
}

module.exports = {
  ...DEFAULT_CONFIG,

  // overrides
  overrides: [...langOverrides(LANG_CONFIG), ...CUSTOM_OVERRIDES],
}
