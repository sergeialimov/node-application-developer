// Methods:
// stream.read()
// stream.pipe() to send data to Writable
// stream.pause()
// stream.resume()
// stream.unpipe() – if there are no pipe destinations. Multiple pipe destinations may be removed by unpipe()



const readable = getReadableStreamSomehow()

readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`)
})

readable.on('end', () => {
  console.log('There will be no more data')
})