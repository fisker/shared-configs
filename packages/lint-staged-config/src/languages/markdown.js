import {PRETTIER, MARKDOWNLINT} from '../commands'

// markdown files
// first prettier then lint

export default {
  // more ext: mdown,mdwn,mkd,mkdn,mkdown
  extensions: 'md,markdown',
  commands: [PRETTIER, MARKDOWNLINT],
}
