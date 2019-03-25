const mem = require('mem')

function getRuleDocs(ruleId, defs) {
  const def = defs.get(ruleId) || {}
  const {meta = {}} = def
  const {docs = {}} = meta

  return docs
}

export default mem(getRuleDocs, {cacheKey: ruleId => ruleId})
