const data = [
  {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
  {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
  {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
]

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
    return [
      {id: 'A1', name: 'A Option1', rrp: '1', info: 'A Option 1 info'},
      {id: 'A2', name: 'A Option2', rrp: '2', info: 'A Option 2 info'},
      {id: 'A3', name: 'A Option3', rrp: '3', info: 'A Option 3 info'},
    ]
  })

  // as it is a mock: We not validating the incoming POST data
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })

}
  
  