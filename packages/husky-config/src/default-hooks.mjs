// hooks
const HOOK_COMMIT_MSG = 'commit-msg'
const HOOK_PRE_COMMIT = 'pre-commit'

// commands
const CMD_COMMITLINT = 'commitlint -E HUSKY_GIT_PARAMS'
const CMD_LINT_STAGED = 'lint-staged'

export default {
  [HOOK_COMMIT_MSG]: [CMD_COMMITLINT],
  [HOOK_PRE_COMMIT]: [CMD_LINT_STAGED],
}
