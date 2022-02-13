'use strict'

const { Readable } = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    // encoding: 'utf8', // convert to Buffer then back to String
    objectMode: true,
    read() {
      if (data.length === 0) this.push(null)
      else this.push(data.shift())
    }
  })
}

const readable = createReadStream()
readable.on('data', (data) => console.log('got data', data))

readable.on('end', () => {
  console.log('There is no more data')
})