'use strict'
const fs = require('fs')

const writable = fs.createWriteStream('./out')
writable.on('finish', () => {
  console.log('finished writing') // in console
})

writable.write('A\n')
writable.write('B\n')
writable.write('C\n')

writable.end('nothing more to write') // the last line in the output file



// node -p "fs.readFileSync('./out').toString()"