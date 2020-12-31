// presets repo: https://github.com/renovatebot/renovate/tree/master/lib/config/presets/internal
// presets: https://renovatebot.com/docs/presets-config/
// options: https://renovatebot.com/docs/configuration-options/

export default {
  description: 'Default Configuration',
  extends: [
    ':enableRenovate',
    ':ignoreModulesAndTests',
    // ':preserveSemverRanges',
    ':separateMajorReleases',
    ':combinePatchMinorReleases',
    ':renovatePrefix',
    ':semanticPrefixChore',
    ':disablePeerDependencies',
    ':disableDigestUpdates',
    ':semanticPrefixFixDepsChoreOthers',
    // ':rebaseStalePrs',
    ':prImmediately',
    ':prHourlyLimitNone',
    ':disableRateLimiting',
    ':automergeRequireAllStatusChecks',
    ':maintainLockFilesDisabled',
    ':ignoreUnstable',
    ':respectLatest',
    ':updateNotScheduled',
    ':npm',
    ':automergeLinters',
    // ':doNotPinPackage',
    ':semanticCommits',
    ':timezone(Asia/Shanghai)',
    ':automergePatch',
    ':automergePr',
    ':assignee(fisker)',
    ':reviewer(fisker)',
    // 'npm:unpublishSafe',
  ],
  ignorePresets: [],
  packageRules: [
    {
      depTypeList: ['devDependencies'],
      automerge: true,
    },
  ],
  rangeStrategy: 'bump',
  vulnerabilityAlerts: {
    labels: ['security'],
    // assignees: ['@fisker'],
  },
  ignoreDeps: ['caniuse-lite', 'caniuse-db', 'electron-to-chromium'],
  stabilityDays: 1,
  // schedule: ['after 5:30pm and before 5:30am'],
}
