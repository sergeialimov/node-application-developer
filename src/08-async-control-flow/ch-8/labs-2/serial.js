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

const fun1 = promisify(opA)
const fun2 = promisify(opB)
const fun3 = promisify(opC)

const run = async () => {
  print(await fun1())
  print(await fun2())
  print(await fun3())
}
run()

