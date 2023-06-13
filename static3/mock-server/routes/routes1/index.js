module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      return [
        {id: 'B1', name: 'B Option1', rrp: '1', info: 'B Option 1 info'},
        {id: 'B2', name: 'B Option2', rrp: '2', info: 'B Option 2 info'}
      ]
    })
  }