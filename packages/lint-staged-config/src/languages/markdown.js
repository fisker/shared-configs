import {MARKDOWNLINT, PRETTIER} from '../commands.js'

// markdown files
// first prettier then lint

const config = {
  // more ext: mdown,mdwn,mkd,mkdn,mkdown
  extensions: 'md,markdown',
  commands: [MARKDOWNLINT, PRETTIER],
}

export default config
