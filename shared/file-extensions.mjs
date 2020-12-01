import toArray from './to-array.mjs'

const languageExtensions = {
  graphql: 'gql,graphql',
  html: 'html,htm',
  javascript: 'js,jsx,mjs,cjs',
  // more markdown extensions: mdown, mdwn, mkd, mkdn, mkdown
  markdown: 'md,markdown',
  typescript: 'ts,tsx',
  yaml: 'yaml,yml',
}

function getExtensions(language) {
  return toArray(languageExtensions[language] || language)
}

export default getExtensions
