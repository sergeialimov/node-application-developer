const EventEmitter = require('events')

const ee = new EventEmitter()

const listener1 = () => { console.log('listener1') }
const listener2 = () => { console.log('listener2') }

ee.on('my-ev', listener1)
ee.on('my-ev', listener2)
ee.on('another-event', () => { console.log('another event') })

setInterval(() => {
  ee.emit('my-ev')
  ee.emit('another-event')
}, 200)

setTimeout(() => {
  ee.removeAllListeners('my-ev')
}, 500)

setTimeout(() => {
  ee.removeAllListeners()
}, 1100)

// 0
// listener1
// listener2
// another event
// 200
// listener1
// listener2
// another event
// 400
// another event
// 600
// another event
// 800
// another event
// 1000