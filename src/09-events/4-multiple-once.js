const EventEmitter = require('events')
const ee = new EventEmitter()

ee.on('my-ev', () => { console.log('my-ev fired') })
ee.on('my-ev', () => { console.log('my-ev fired') })
ee.emit('my-ev')
ee.emit('my-ev')
ee.emit('my-ev')
// my-ev x6 times

ee.once('my-e', () => { console.log('my-e')})
ee.once('my-e', () => { console.log('my-e')})
ee.emit('my-e')
ee.emit('my-e')
ee.emit('my-e')

// my-e x2 times