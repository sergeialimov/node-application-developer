'use strict'
const path = require('path')

console.log('file name', __filename)
console.log('path name', __dirname)

const joined = path.join(__dirname, 'filename-dirname.js')

console.log('absolute', path.isAbsolute(joined))


console.log('filename parsed', path.parse(__filename))
console.log('filenama basename', path.basename(__filename))
console.log('filname dirname', path.dirname(__filename))
console.log('filename extname', path.extname(__filename))

console.log('relative', path.relative(__filename, '/Users/sa/projects/backend/nad/'))
console.log('resolve', path.resolve('a', 'b')) // I would say the name of resolve is not the most clear, path.cd([starting dir], [final dir])
