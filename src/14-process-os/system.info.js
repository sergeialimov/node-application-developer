'use strict'

const os = require('os')

console.log('hostname', os.hostname())
console.log('home dir', os.homedir())
console.log('temp dir', os.tmpdir())

console.log('platform', os.platform())
console.log('type', os.type())


setInterval(() => {
  console.log('system uptime', os.uptime())
  console.log('freemem', os.freemem())
  console.log('totalmem', os.totalmem())
  console.log()
}, 1000)