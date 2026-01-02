// presets repo: https://github.com/renovatebot/renovate/tree/master/lib/config/presets/internal
// presets: https://renovatebot.com/docs/presets-config/
// options: https://renovatebot.com/docs/configuration-options/
const defaultConfig = {
  description: 'Default Configuration',
  dependencyDashboardApproval: true,
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
    // ':automergePatch',
    // ':automergePr',
    ':assignee(fisker)',
    ':reviewer(fisker)',
    // 'npm:unpublishSafe',
  ],
  ignorePresets: [],
  packageRules: [
    {
      groupName: 'GitHub Actions',
      matchManagers: ['github-actions'],
    },
    {
      groupName: 'devDependencies',
      matchDepTypes: ['devDependencies'],
    },
  ],
  rangeStrategy: 'bump',
  vulnerabilityAlerts: {
    labels: ['security'],
    // assignees: ['@fisker'],
  },
  ignoreDeps: [
    'caniuse-lite',
    'caniuse-db',
    'electron-to-chromium',
    'renovate',
  ],
  stabilityDays: 1,
  // schedule: ['after 5:30pm and before 5:30am'],
}

export default defaultConfig
