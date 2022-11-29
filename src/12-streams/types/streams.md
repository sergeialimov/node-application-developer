# Streams

Stream inherits from EventEmitter

Types of streams:
- Readable
- Writeable
- Duplex
- Transform
- PassThrough




`node -p "stream + ''"`

```js
function Stream (opts) {
  EE.call(this, opts) // EE - EventEmitter?
}
```

`node -p "stream.prototype"`
EventEmitter { pipe: Function (anonymous) }


`node -p "Object.getPrototypeOf(stream.prototype)"`
result: 

{
  _events: undefined,
  _eventsCount: 0,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames]
}
