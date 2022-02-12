// Methods:
// stream.read()
// stream.pipe() to send data to Writable
// stream.pause()
// stream.resume()
// stream.unpipe() – if there are no pipe destinations. Multiple pipe destinations may be removed by unpipe()

'use strict'
const fs = require('fs')
const readable = fs.createReadStream(__filename)

readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`)
  console.log(chunk)
})

readable.on('end', () => {
  console.log('There will be no more data')
})