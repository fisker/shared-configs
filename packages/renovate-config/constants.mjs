import url from 'node:url'
import path from 'node:path'

export const PACKAGE_JSON_DIR = path.dirname(url.fileURLToPath(import.meta.url))
export const PACKAGE_FIELD = 'renovate-config'
