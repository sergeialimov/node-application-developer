const { StringDecoder } = require('string_decoder')

const frag1 = Buffer.from('f09f', 'hex')
const frag2 = Buffer.from('9180', 'hex')

console.log('frag1', frag1.toString())
console.log('frag2', frag2.toString())

const decoder = new StringDecoder()

console.log(decoder.write(frag1))
console.log(decoder.write(frag2))