/**
 * A module method to pipe between streams and generators forwarding errors and
 * properly cleaning up and provide a callback when the pipeline is complete.
 */

const { pipeline } = require('stream')
const fs = require('fs')
const zlib = require('zlib')

/**
 * Use the pipline API to easily pipe a series of streams
 * together and get notified when the pipeline is fully done.
 * 
 * A pipeline to gzip a potentiatelly huge tar file efficiently:
 */


pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed', err)
    } else {
      console.log('Pipeline succeded')
    }
  }
)