import mem from 'mem'

function getRuleDocuments(ruleId, definitions) {
  const definition = definitions.get(ruleId) || {}
  const {meta = {}} = definition
  const {docs: documents = {}} = meta

  return documents
}

export default mem(getRuleDocuments, {cacheKey: (ruleId) => ruleId})
