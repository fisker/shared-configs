import process from 'node:process'
import * as path from 'node:path'
import {toUrl} from 'url-or-path'
import {resolve} from 'import-meta-resolve'

function importFile(file) {
  return import(toUrl(file).href)
}

/**
 * @param {string} specifier
 * @param {string | URL} parent
 */
function importFromFile(specifier, parent) {
  const url = resolve(specifier, toUrl(parent).href)
  return import(url)
}

/**
 * @param {string} specifier
 * @param {string} directory
 */
function importFromDirectory(specifier, directory) {
  return importFromFile(specifier, path.join(directory, 'noop.js'))
}

async function importPreferLocal(specifier) {
  try {
    return await importFromDirectory(specifier, process.cwd())
  } catch {}

  return import(specifier)
}

export {importFile, importPreferLocal}
