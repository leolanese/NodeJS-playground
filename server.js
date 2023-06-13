// not need it for example: static3
// node -e "fs.unlinkSync('server.js')"
const { createServer } = require('http')

const data = JSON.stringify([
  {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
  {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
  {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
])

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
})

server.listen(3000)