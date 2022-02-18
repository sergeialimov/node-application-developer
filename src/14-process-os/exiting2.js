'use strict'
setInterval(() => {
  console.log('this interval is keeping the process open')
  process.exitCode = 1
}, 500)

setTimeout(() => {
  console.log('exit after this')
  process.exit()
}, 1750)


// echo $?

process.on('exit', (code) => {
  console.log('exiting with code', code)
  
  // no asynchronous work can be done in the event handler function because the process is exiting
  setTimeout(() => {
    console.log('this will never happen')
  }, 1)
})