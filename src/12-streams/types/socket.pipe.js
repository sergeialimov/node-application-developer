/**
 * cat some-file | grep something
 *
 * The pipe operator instructs the console to read the stream of output coming from the
 * left-hand command (cat some-file) and write that data to the right-hand command
 * (grep find-something). The concept is the same in Node, but the pipe method is used.
 */

'use strict'

 const net = require('net')
 const socket = net.connect(3000)

 // socket.on('data', (data) => {
 //   console.log('got data', data.toString())
 // })

 socket.pipe(process.stdout)

 socket.write('hello')
 setTimeout(() => {
   socket.write('all done')
   setTimeout(() => {
     socket.end()
   }, 250)
 }, 3250)


/**
 * The pipe method exists on Readable streams (recall socket is a Duplex stream instance and that
 * Duplex inherits from Readable), and is passed a Writable stream (or a stream with Writable
 * capabilities). Internally, the pipe method sets up a data listener on the readable stream and
 * automatically writes to the writable stream as data becomes available.
 * 
 * Since pipe returns the stream passed to it, it is possible to chain pipe calls together:
 * streamA.pipe(streamB).pipe(streamC). This is a commonly observed practice, but it's also bad
 * practice to create pipelines this way. If a stream in the middle fails or closes for any reason,
 * the other streams in the pipeline will not automatically close. This can create severe memory
 * leaks and other bugs. The correct way to pipe multiple streams is to use
 * the stream.pipeline utility function.
 */