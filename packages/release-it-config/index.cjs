const fs = require('node:fs')
const path = require('node:path')

function* iterateDirectoryUp(directory) {
  const stopDirectory = path.parse(directory).root

  while (directory !== stopDirectory) {
    yield directory
    directory = path.dirname(directory)
  }

  yield stopDirectory
}

const hasPublishWorkflow = () => {
  for (const directory of iterateDirectoryUp(__dirname)) {
    if (fs.existsSync(path.join(directory, '.git'))) {
      return fs.existsSync(
        path.join(directory, '.github/workflows/publish.yml'),
      )
    }
  }

  return false
}

let cachedHasPublishWorkflow

const config = {
  git: {
    commitMessage: 'chore: release v${version}',
    tagName: 'v${version}',
  },
  github: {
    release: true,
  },
  npm: {
    get publish() {
      cachedHasPublishWorkflow ??= hasPublishWorkflow()
      return !cachedHasPublishWorkflow
    },
  },
}

module.exports = config
