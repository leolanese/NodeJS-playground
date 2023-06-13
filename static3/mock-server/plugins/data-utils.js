// fastify-plugin module is used to de-encapsulate a plugin
const fp = require('fastify-plugin')

const catToPrefix = {
  electronics: 'A',
  confectionery: 'B'
}

const calculateID = (idPrefix, data) => {
  const sorted = [...(new Set(data.map(({id}) => id)))]
  const next = Number(sorted.pop().slice(1)) + 1
  return `${idPrefix}${next}`
}

module.exports = fp(async function (fastify, opts) {
  // fastify.decorateRequest method to decorate the request
  fastify.decorateRequest('mockDataInsert', function insert (category, data) {
    const request = this
    const idPrefix = catToPrefix[category]
    const id = calculateID(idPrefix, data)
    data.push({id, ...request.body})
  })
})