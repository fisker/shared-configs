import url from 'url'
import path from 'path'

export const PACKAGE_JSON_DIR = path.dirname(url.fileURLToPath(import.meta.url)
)
export const PACKAGE_FIELD = 'renovate-config'
