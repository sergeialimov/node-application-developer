const EventEmitter = require('events')
// const { EventEmitter } = require('events') // also works

// const emitter = new EventEmitter() // also works

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

