import path from 'node:path'
import url from 'node:url'

export const PACKAGE_JSON_DIR = path.dirname(url.fileURLToPath(import.meta.url))
export const PACKAGE_FIELD = 'renovate-config'
