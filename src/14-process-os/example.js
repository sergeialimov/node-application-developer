'use strict'

// console.log(process.stdin.isTTY ? 'terminal' : 'piped to')
console.error(process.stdin.isTTY ? 'terminal' : 'piped to')
// process.stderr.write(process.stdin.isTTY ? 'terminal\n' : 'piped to\n')

const { Transform } = require('stream')

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, end, next) {
      const uppercased = chunk.toString().toUpperCase()
      next(null, uppercased)
    }
  })
}

const uppercase = createUppercaseStream()

process.stdin.pipe(uppercase).pipe(process.stdout)