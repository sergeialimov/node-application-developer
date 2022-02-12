const { Readable } = require('stream')

async function * generate() {
  yield 'hello'
  yield 'streams'
}

const readable = Readable.from(generate())
console.log('generate()', generate())

readable.on('data', (data) => {
  console.log(data)
})
