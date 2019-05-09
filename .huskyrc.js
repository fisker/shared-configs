/*!
 * config file for `husky`
 *
 * update: wget-O .huskyrc.js https://git.io/fhNpR
 * document: https://git.io/fhNph
 */

module.exports = require('@self/husky-config').prepend({
  'pre-commit': ['yarn build', 'git add *.md'],
})
