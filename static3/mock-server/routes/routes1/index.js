// mock
const data = [
  {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
  {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
  {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
]

module.exports = async function (fastify, opts) {

    fastify.get('/', async function (request, reply) {
      return [
        {id: 'B1', name: 'B Option1', rrp: '1', info: 'B Option 1 info'},
        {id: 'B2', name: 'B Option2', rrp: '2', info: 'B Option 2 info'}
      ]
    })

    fastify.post('/', async function (request, reply) {
      request.mockDataInsert(opts.prefix.slice(1), data)
      return data;
    })

  }