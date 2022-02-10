// The 'finish' event is emitted after the stream.end() method has been called, and all data has been flushed to the underlying system

const writer = getWritableStreamSomehow()
for (let i = 0; i < 100; i++) {
  writer.write(`hello ${i}`)
}

writer.on('finish', () => {
  console.log('all writes are now completed')
})

writer.end('the end')