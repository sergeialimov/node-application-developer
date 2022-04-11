const EventEmitter = require('events')

// In modern node the events module is the EventEmitter constructor as well:
// const { EventEmitter } = require('events')


// To create a new event emitter, call the constructor with new:
// const emitter = new EventEmitter()

// A more typical pattern of usage with EventEmitter, however, is to inherit from it:
class emitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts)
    this.name = opts.name
  }
  destroy(err) {
    if (err) {
      this.emit('error', err)
    }
    this.emit('close')
  }
}

