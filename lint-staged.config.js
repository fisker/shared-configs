/*!
 * config file for `lint-staged`
 *
 * update: wget -O lint-staged.config.js https://git.io/fhNpr
 * document: https://git.io/fhNpF
 *
 */

module.exports = {
  ...require('@fisker/lint-staged-config'),
  '**/package.json': ['finepack', 'prettier --write', 'git add'],
}
