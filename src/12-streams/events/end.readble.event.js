const readble = getReadableStreamSomehow();

readble.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`)
})

readble.on('end', () => {
  console.log('There will be no more data')
})