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

const ops = [promisify(opA), promisify(opB), promisify(opC)]



async function run() {
  await Promise.all(promises)
  // await opAPromisified(print)
  // await opBPromisified(print)
  // await opCPromisified(print)
}

run()