// This will ensure the contents are printed out chronologically, according to the time it took each of them to load.
// If the complexity for parallel execution grows it may be better to use a callback based approach and wrap it at a higher level into a promise so that it can be used in an async/await function:

const { promisify } = require('util')
const { readFile } = require('fs')
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)

const read = promisify((cb) => {
  let index = 0
  const print = (err, contents) => {
    index += 1
    if (err) {
      console.error(err)
      if (index === 3) cb()
      return
    }
    console.log(contents.toString())
    if (index === 3) cb()
  }
  readFile(bigFile, print)
  readFile(mediumFile, print)
  readFile(smallFile, print)
})

async function run () {
  await read()
  console.log('finished!')
}

run().catch(console.error)

// Here we've wrapped the callback-based parallel execution approach into a function that accepts a callback (cb) and we've passed that whole function into promisify.
// This means that our read function returns a promise that resolves when all three parallel operations are done, after which the run function logs out: finished!