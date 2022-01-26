const { EvenEmitter } = require('events')
const { EventEmitter } = require('stream')

const ee = new EventEmitter()
ee.on('close', () => { console.log('close event fired')})
// It's the same as
// ee.addListener('close', () => {
//   console.log('close event fired')
// })

ee.on('add', (a, b) => { console.log(a + b) }) // logs 13
ee.emit('add', 7, 6)

ee




ee.emit('close')