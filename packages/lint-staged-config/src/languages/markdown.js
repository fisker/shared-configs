import {PRETTIER, MARKDOWNLINT} from '../commands.js'

// markdown files
// first prettier then lint

const config = {
  // more ext: mdown,mdwn,mkd,mkdn,mkdown
  extensions: 'md,markdown',
  commands: [PRETTIER, MARKDOWNLINT],
}

export default config
