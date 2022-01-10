// function myAsyncOperation (cb) {
//   doSmthAsync((err, value) => {
//     cb(err, value)
//   });
// }

// function myAsyncOperation () {
//   return new Promise((resolve, reject) => {
//     doSmthAsync((err, value) => {
//       if (err) reject (err)
//       else resolve(value);
//     });
//   })
// }

// const promise = myAsyncOperation()
// promise
//   .then((value) => { console.log(value) })
//   .catch((err) => { console.log(err) })

const { promisify } = require('util')
const { readFile } = require('fs')

const readFileProm = promisify(readFile)

const promise = readFileProm(__filename)

promise.then((contents) => {
  console.log(contents.toString())
})

promise.catch((err) => {
  console.error(err)
})
