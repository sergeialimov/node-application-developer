'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter()
let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)

function listener () {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}


ee.on('tick', listener)
ee.once('tick', () => {
  ee.removeListener('tick', listener)
})
