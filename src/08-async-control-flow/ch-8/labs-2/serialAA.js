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


const run1 = async () => await opAPromisified(print);

const run2 = async () => await opBPromisified(print);

const run3 = async () => await opCPromisified(print);


run1()
run2()
run3()