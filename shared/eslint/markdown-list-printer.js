function list({names, data}) {
  const [localName, foreignName] = names

  return [
    `<!-- ${localName} vs ${foreignName}`,
    ...data.map(({name, link, local, foreign}) =>
      [name, local, foreign, link].join(', ')
    ),
    `-->`,
  ].join('\n')
}

export default list
