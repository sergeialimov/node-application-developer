'use strict'

const { pipeline } = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')
const { Transform } = require('stream')

const createUpperCaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase()
      next(null, uppercased)
    }
  })
}

pipeline(
  createReadStream(__filename),
  createUpperCaseStream(),
  createWriteStream(join(__dirname, 'out.txt')),
  (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('finished writing')
  }
)