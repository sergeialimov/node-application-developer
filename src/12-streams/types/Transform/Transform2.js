/**
 * The Transform constructor inherits from the Duplex constructor.
 * Transform streams are duplex streams with an additional constraint applied to enforce a causal
 * relationship between the read and write interfaces. A good example is compression:
 */


/**
 * As data is written to the transform stream instance, data events are emitted
 * on the readable side of that data in compressed format.
 * We take the incoming data buffers and convert them to strings,
 * using BASE64 encodings. This results in the following output:
 */

'use strict'

const { createGzip } = require('zlib')

const transform = createGzip()
transform.on('data', (data) => {
  console.log('got gzip data', data.toString('base64'))
})

transform.write('first')

setTimeout(() => {
  transform.end('second')
}, 500)