const EventEmitter = require('events')
const ee = new EventEmitter()

ee.on('my-ev', () => { console.log('my-ev fired') })
ee.emit('my-ev')
ee.emit('my-ev')
ee.emit('my-ev')


ee.once('my-e', () => { console.log('my-e')})
ee.emit('my-e')
ee.emit('my-e')
ee.emit('my-e')