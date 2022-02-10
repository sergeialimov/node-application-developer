// src <stream.Readable> source stream is piping to this writable to it's set of destinations 

const writer = getWritableStreamSomehow()
const reader = getReadableStreamSomehow()

write.on('pipe', (src) => {
  console.log('smth is piping')
  assert.equal(src, reader)
})

reader.pipe(writer)