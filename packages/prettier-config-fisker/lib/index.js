'use strict';

var global = {
  bracketSpacing: false,
  htmlWhitespaceSensitivity: 'ignore',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
};

var css = {
  singleQuote: false,
};

var graphql = {
  extensions: 'gql,graphql',
};

var html = {
  extensions: 'html,htm',
  // effect js in html
  singleQuote: true,
};

var javascript = {
  extensions: 'js,jsx,mjs',
  parser: 'babel',
  singleQuote: true,
};

var json = {
  parser: 'json-stringify',
  singleQuote: false,
};

var json5 = {
  singleQuote: false,
};

var less = {
  singleQuote: false,
};

var markdown = {
  // more ext: mdown,mdwn,mkd,mkdn,mkdown
  extensions: 'md,markdown',
  singleQuote: true,
};

var mdx = {};

var scss = {
  singleQuote: false,
};

var typescript = {
  extensions: 'ts,tsx',
  singleQuote: true,
};

var vue = {};

var yaml = {
  extensions: 'yaml,yml',
  singleQuote: false,
};



var languages = /*#__PURE__*/Object.freeze({
  css: css,
  graphql: graphql,
  html: html,
  javascript: javascript,
  json: json,
  json5: json5,
  less: less,
  markdown: markdown,
  mdx: mdx,
  scss: scss,
  typescript: typescript,
  vue: vue,
  yaml: yaml
});

// https://prettier.io/docs/en/options.html
const SUPPORTED_OPTIONS = [
  'printWidth',
  'tabWidth',
  'useTabs',
  'semi',
  'singleQuote',
  'quoteProps',
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
];

function toArray(extensions) {
  extensions = Array.isArray(extensions) ? extensions : extensions.split(',');
  return extensions.map(extension => extension.trim()).filter(Boolean)
}

function toGlob(extensions) {
  extensions = toArray(extensions);

  return extensions.length > 1
    ? `*.{${extensions.join(',')}}`
    : `*.${extensions}`
}

function isGlobal(key, value) {
  const globalValue = global[key];

  return globalValue === value
}

function isUndefined(x) {
  return typeof x === 'undefined'
}

function toOverride(config) {
  const {language} = config;
  const files = toGlob(config.extensions || language);

  const options = SUPPORTED_OPTIONS.reduce((options, key) => {
    const value = config[key];
    if (!isUndefined(value) && !isGlobal(key, value)) {
      options[key] = value;
    }

    return options
  }, {});

  return {
    files,
    options,
  }
}

function toOverrides(languages) {
  return Object.keys(languages).map(language =>
    toOverride({
      language,
      parser: language,
      ...languages[language],
    })
  )
}

const config = {
  ...global,
  overrides: [...toOverrides(languages)],
};

function customize(options = {}) {
  const {overrides = []} = options;

  return {
    ...config,
    ...options,
    overrides: [...config.overrides, ...overrides],
  }
}

Object.defineProperty(config, 'customize', {
  enumerable: false,
  writable: false,
  configurable: true,
  value: customize,
});

module.exports = config;
