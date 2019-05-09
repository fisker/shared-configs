/*!
 * config file for `husky`
 *
 * update: wget-O .huskyrc.js https://git.io/fhNpR
 * document: https://git.io/fhNph
 */

module.exports = require('@fisker/husky-config').before({
  'pre-commit': ['yarn build', 'git add *.md'],
})
