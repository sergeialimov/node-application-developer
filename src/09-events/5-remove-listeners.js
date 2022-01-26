const { EventEmitter } = require('events')

const ee = new EventEmitter()

const listener1 = () => { console.log('listener1') }
const listener2 = () => { console.log('listener2') }

ee.on('my-event', listener1)
ee.on('my-event', listener2)

setInterval(() => {
  ee.emit('my-event')
}, 200)

setTimeout(() => {
  ee.removeListener('my-event', listener1)
}, 500)

setTimeout(() => {
  ee.removeListener('my-event', listener2)
}, 1100)


// 0
// listener1
// listener2
// 200
// listener1
// listener2
// 400
// listener2
// 600
// listener2
// 800
// listener2
// 1000