'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}


const opAPromisified = promisify(opA)
const opBPromisified = promisify(opB)
const opCPromisified = promisify(opC)


opAPromisified(print)
  .then(() => {
    opBPromisified(print)
      .then(() => {
        opCPromisified(print)
      })
  })
