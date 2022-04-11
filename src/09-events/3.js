// The prependListener method can be used to inject listeners into the top position

const EventEmitter = require('events')

const ee = new EventEmitter()

ee.on('my-event', () => { console.log('2st') })

ee.prependListener('my-event', () => { console.log('1st') })

ee.emit('my-event')
