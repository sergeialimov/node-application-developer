/**
 * The net.connect method returns a Duplex stream which represents the TCP client socket.
 * We listen for data events and log out the incoming data buffers,
 * converting them to strings for display purposes.
 *  On the writable side, the socket.write method is called with a string,
 * after three and a quarter seconds another payload is written,
 * and another quarter second later the stream is ended by calling socket.end.
 * If we start both of the code examples as separate processes we can view the interaction:
 */

'use strict'

const net = require('net')
const socket = net.connect(3000)

socket.on('data', (data) => {
  console.log('got data', data.toString())
})

socket.write('hello')
setTimeout(() => {
  socket.write('all done')
  setTimeout(() => {
    socket.end()
  }, 250)
}, 3250)