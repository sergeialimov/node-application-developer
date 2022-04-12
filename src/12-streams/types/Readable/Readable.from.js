const { Readable } = require('stream')

async function * generate() {
  yield 'hello'
  yield 'streams'
}

const gen = generate(); // Generator {}
const readable = Readable.from(gen)

readable.on('data', (chunk) => {
  console.log('chunk', chunk)
})
