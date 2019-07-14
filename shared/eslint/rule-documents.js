const mem = require('mem')

function getRuleDocuments(ruleId, defs) {
  const def = defs.get(ruleId) || {}
  const {meta = {}} = def
  const {docs: documents = {}} = meta

  return documents
}

export default mem(getRuleDocuments, {cacheKey: ruleId => ruleId})
