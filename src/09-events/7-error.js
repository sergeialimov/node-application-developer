const EventEmitter = require('events')
const ee = new EventEmitter()

// process.stdin.resume()

ee.on('error', (err) => {
  console.log('got error', err.message)
})

ee.emit('error', new Error('oh oh'))

