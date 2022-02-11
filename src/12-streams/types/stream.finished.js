/**
 * @stream <Stream> A readble and/or writable stream.
 * options
 */

const { finished } = require('stream')
const fs = require('fs')
const rs = fs.createReadStream('archive.tar')

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed', err)
  } else {
    console.log('Stream is done reading')
  }
})

rs.resume()


/**
 * stream.finished() leaves dangling event listeners (in paricular 'error', 'end', 'finish', 'close')
 * after callback has been invoked.
 * Tre reason for thid is so that unexpected 'error' events (due to incorrect stream implementations) do not cause unexpected crashes.
 * If this is umwanted behavior then the returned cleanup function needs to be invoked in the callback:
 */

const cleanup = finished(rs, (err) => {
  clenup()
})