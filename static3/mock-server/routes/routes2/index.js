module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      return [
        {id: 'A1', name: 'A Option1', rrp: '1', info: 'A Option 1 info'},
        {id: 'A2', name: 'A Option2', rrp: '2', info: 'A Option 2 info'},
        {id: 'A3', name: 'A Option3', rrp: '3', info: 'A Option 3 info'},
      ]
    })
  }
  
  